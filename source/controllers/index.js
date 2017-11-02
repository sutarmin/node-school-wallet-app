const path = require('path');
const {renderToStaticMarkup} = require('react-dom/server');

const representCard = require('../services/cardRepesent');
const representTrasnsaction = require('../services/transactionRepresent');

function getView(viewId) {
	const viewPath = path.resolve(__dirname, '..', 'views', `${viewId}.server.js`);
	delete require.cache[require.resolve(viewPath)];
	return require(viewPath);
}

async function getState(ctx) {
	const cards = await ctx.cardsModel.getAll();
	const lastTransaction = await ctx.transactionsModel.findLast();
	const mappedCards = cards.map(representCard);
	const lastUsedCard = mappedCards.find((card) => card.id === lastTransaction.cardId) || mappedCards[0];
	const trasnsactions = await ctx.transactionsModel.getByCard(lastUsedCard.id);

	return {
		cards: mappedCards,
		activeCard: lastUsedCard,
		user: {
			login: 'samuel_johnson',
			firstName: 'Samuel',
			lastName: 'Johnson',
		},
		history: {
			transactions: trasnsactions.map(representTrasnsaction),
			loading: false,
		},
	};
}

async function index(ctx) {
	const state = await getState(ctx);
	const indexView = getView('index');
	const indexViewHtml = renderToStaticMarkup(indexView(state));

	ctx.body = indexViewHtml;
}

module.exports = index;
