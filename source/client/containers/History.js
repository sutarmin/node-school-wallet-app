import {connect} from 'react-redux';

import History from '../components/History';

const filterTransactions = (transactions, activeCard) => (
	transactions.filter((item) => item.cardId === activeCard.id)
);

const mapStateToProps = ({history: {transactions, loading}, activeCard}) => ({
	cardTransactions: filterTransactions(transactions, activeCard),
	loading,
});

export default connect(mapStateToProps)(History);
