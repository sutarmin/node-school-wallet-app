'use strict';

const representTransaction = require('../../services/transactionRepresent');

module.exports = async (ctx) => {
	const cardId = Number(ctx.params.id);
	const transactions = await ctx.transactionsModel.getByCard(cardId);
	ctx.body = transactions.map(representTransaction);
};
