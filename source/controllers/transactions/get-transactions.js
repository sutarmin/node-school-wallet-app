'use strict';

const representTransaction = require('../../services/transactionRepresent');

module.exports = async (ctx) => {
  const transactions = await ctx.transactionsModel.getAll();
  ctx.body = representTransaction(transactions);
};
