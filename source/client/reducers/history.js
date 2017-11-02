import {handleActions} from 'redux-actions';

import {
	loadTransactionsSuccess,
	loadingTransactions,
	loadingTransactionsFailed,
} from '../actions/history';

const defaultState = {
	transactions: [],
	loading: false,
};

const transactionReducer = handleActions({
	[loadTransactionsSuccess]: (state, {payload: {transactions}}) => ({
		transactions: transactions.reduce((acc, transaction) => {
			if (!acc.find((item) => item.id === transaction.id)) {
				acc.push(transaction);
			}

			return acc;
		}, state.transactions),
		loading: false,
	}),
	[loadingTransactions]: (state) => ({
		transactions: state.transactions,
		loading: true,
	}),
	[loadingTransactionsFailed]: (state) => ({
		transactions: state.transactions,
		loading: false,
	}),
}, defaultState);

export default transactionReducer;
