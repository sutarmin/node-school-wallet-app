'use strict';

const ApplicationError = require('../../libs/application-error');

const DbModel = require('./common/dbModel');

class Transactions extends DbModel {
	constructor() {
		super('transaction');
	}

	/**
	 * Добавляет новую транзакцию
	 *
	 * @param {Object} transaction описание транзакции
	 * @returns {Promise.<Object>}
	 */
	async create(transaction) {
		const newTransaction = Object.assign({}, transaction, {
			id: await this._generateId()
		});

		await this._insert(newTransaction);
		return newTransaction;
	}

	/**
	 * Получает транзакции по идентификатору карты
	 * @param {Number} cardId Идентификатор карты
	 * @return {Promise.<Object[]>}
	 */
	async getByCard(cardId) {
		const item = await this.getBy({cardId});
		return item;
	}

	/**
	 * Удаление транзакции
	 */
	static async remove() {
		throw new ApplicationError('Transaction can\'t be removed', 400);
	}

	/**
	 * Получение всех транзакций пользователя
	 * @param {[Number]} cardIds массик Id карт
	 * @return {[Object]} sum сумма
	 */
	async getByCardIds(cardIds) {
		const data = await this._MongooseModel
		.find({})
		.where('cardId').in(cardIds)
		.lean()
		.exec();
		return data;
	}
}

module.exports = Transactions;
