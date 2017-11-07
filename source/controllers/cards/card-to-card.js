'use strict';

module.exports = async (ctx) => {
	const cardId = ctx.params.id;

	const operation = ctx.request.body;
	const {target, sum} = operation;

	await ctx.cardsModel.refill(cardId, sum);
	await ctx.cardsModel.withdraw(target, sum);

	const sourceCard = await ctx.cardsModel.get(cardId);
	const targetCard = await ctx.cardsModel.get(target);

	const sourceTransaction = await ctx.transactionsModel.create({
		cardId: sourceCard.id,
		type: 'withdrawCard',
		data: {
			cardNumber: targetCard.cardNumber
		},
		time: new Date().toISOString(),
		sum
	});

	const targetTransaction = await ctx.transactionsModel.create({
		cardId: targetCard.id,
		type: 'withdrawCard',
		data: {
			cardNumber: sourceCard.cardNumber
		},
		time: new Date().toISOString(),
		sum: -sum
	});

	ctx.status = 200;
	ctx.body = sourceTransaction;
};
