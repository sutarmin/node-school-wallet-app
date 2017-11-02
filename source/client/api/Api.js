import axios from 'axios';

/**
 * Класс с методами обращения к API
 */
class Api {
	/**
	 * Получить транзакции по карте
	 * @param {number} cardId
	 * @returns {Promise}
	 */
	static async getCardTransactions(cardId) {
		return axios.get(`/cards/${cardId}/transactions`)
			.then(({data}) => data)
			.catch((err) => {
				throw err;
			});
	}
}

export default Api;
