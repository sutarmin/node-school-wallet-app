'use strict';

const ApplicationError = require('../../libs/application-error');

module.exports = async (type, ctx) => {
	const cardId = ctx.params.id;
	const operation = ctx.request.body;

	const cardToCard = async (refillSource = true) => {
		const {target, sum} = operation;
		const sourceCard = refillSource ? await ctx.cardsModel.get(cardId) : await ctx.cardsModel.get(target);
		const targetCard = refillSource ? await ctx.cardsModel.get(target) : await ctx.cardsModel.get(cardId);

		try {
			await ctx.cardsModel.withdraw(target, sum);
		} catch (err) {
			return err;
		}

		const withdrawTransaction = await ctx.transactionsModel.create({
			cardId: sourceCard.id,
			type: 'withdrawCard',
			data: {
				cardNumber: targetCard.cardNumber
			},
			time: new Date().toISOString(),
			sum
		});

		await ctx.cardsModel.refill(cardId, sum);
		const refillTransaction = await ctx.transactionsModel.create({
			cardId: targetCard.id,
			type: 'refillCard',
			data: {
				cardNumber: sourceCard.cardNumber
			},
			time: new Date().toISOString(),
			sum
		});

		return [refillTransaction, withdrawTransaction];
	};

	const paymentMobile = async () => {
		const {sum, phoneNumber} = operation;
		const commission = 3;

		try {
			await ctx.cardsModel.withdraw(cardId, parseInt(sum, 10) + commission);
		} catch (err) {
			return err;
		}

		const transaction = await ctx.transactionsModel.create({
			cardId,
			type: 'paymentMobile',
			data: {phoneNumber},
			time: new Date().toISOString(),
			sum
		});

		return transaction;
	};

	switch (type) {
		case 'refill':
			return cardToCard();
		case 'withdraw':
			return cardToCard(false);
		case 'paymentMobile':
			return paymentMobile();
		default:
			throw new ApplicationError(`Invalid operation type: ${type}`, 400);
	}
};
