import {createAction} from 'redux-actions';

import Api from '../api/Api';

export const LOADING_TRANSACTIONS = 'LOADING_TRANSACTIONS';
export const LOAD_TRANSACTIONS_SUCESS = 'LOAD_TRANSACTIONS_SUCCESS';
export const LOAD_TRANSACTIONS_FAILED = 'LOADING_TRANSACTIONS_FAILED';

export const loadTransactionsSuccess = createAction(LOAD_TRANSACTIONS_SUCESS);
export const loadingTransactions = createAction(LOADING_TRANSACTIONS);
export const loadingTransactionsFailed = createAction(LOAD_TRANSACTIONS_FAILED);

/**
 * Загрузить историю транзакций по карте
 * @param {number} cardId
 */
export const loadTransactions = (cardId) => (
	(dispatch) => {
		dispatch(loadingTransactions());
		Api.getCardTransactions(cardId)
			.then((transactions) => {
				dispatch(loadTransactionsSuccess({transactions}));
			})
			.catch(() => {
				dispatch(loadingTransactionsFailed());
			});
	}
);
