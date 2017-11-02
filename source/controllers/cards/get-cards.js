'use strict';

const representCard = require('../../services/cardRepesent');

module.exports = async (ctx) => {
	const cards = await ctx.cardsModel.getAll();
	ctx.body = cards.map(representCard);
};
