const CardInfo = require('../../libs/cardInfo');

const ASSETS_PATH = '/assets/';

/**
 * Отображение иноформации по карте
 * @param {Object} card
 * @returns {Object}
 */
const representCard = (card) => {
	const cardInfo = new CardInfo(card.cardNumber);

	return {
		id: card.id,
		balance: card.balance,
		number: cardInfo.numberNice,
		bankName: cardInfo.bankName,
		theme: {
			backgroundColor: cardInfo.backgroundColor,
			textColor: cardInfo.textColor,
			bankLogoUrl: cardInfo.bankLogoSvg,
			brandLogoUrl: cardInfo.brandLogoSvg,
			bankSmLogoUrl: `${ASSETS_PATH + cardInfo.bankAlias}-history.svg`,
		},
	};
};

module.exports = representCard;
