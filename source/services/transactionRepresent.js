const path = require('path');
const CardInfo = require('../../libs/cardInfo');

const ASSETS_PATH = '/assets/';

/**
 * Описание типов
 * @param {string} type
 * @returns {string}
 */
const typeDescritptor = (type) => {
	switch (type) {
		case 'paymentMobile': {
			return 'Оплата телефона';
		}
		case 'prepaidCard': {
			return 'Пополнение с карты';
		}
		case 'withdrawCard': {
			return 'Перевод на карту';
		}
		default: {
			return 'Операция';
		}
	}
};

/**
 * Получить иконку транзакции в зависимости от ее типа
 * @param {Object} transaction
 * @returns {string}
 */
const getLogoUrl = (transaction) => {
	switch (transaction.type) {
		case 'paymentMobile': {
			return path.join(ASSETS_PATH, 'ru-megafon-history.svg');
		}
		case 'prepaidCard':
		case 'withdrawCard': {
			const cardInfo = new CardInfo(transaction.data);
			return path.join(ASSETS_PATH, `${cardInfo.bankAlias}-history.svg`);
		}
		default: {
			return path.join(ASSETS_PATH, 'default-history.svg');
		}
	}
};

/**
 * Отображение информации по транзакции
 * @param {Object} transaction
 * @returns {Object}
 */
const representTransaction = (transaction) => ({
	...transaction,
	sum: Number(transaction.sum),
	description: typeDescritptor(transaction.type),
	theme: {
		bankSmLogoUrl: getLogoUrl(transaction),
	},
});

module.exports = representTransaction;
