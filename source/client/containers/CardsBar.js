import {connect} from 'react-redux';

import CardsBar from '../components/CardsBar';
import {changeActiveCard} from '../actions/activeCard';
import {loadTransactions} from '../actions/history';

const mapStateToProps = (state) => ({
	cardsList: state.cards,
	activeCardId: state.activeCard.id,
	isCardsEditable: false,
	onCardEdit: (id) => console.log(`Card with id ${id} was edited.`),
	onCardAdd: () => console.log('Add card handler.'),
});

const mapDispatchToProps = (dispatch) => ({
	onCardClick: (cards, id) => {
		dispatch(changeActiveCard({cards, id}));
		dispatch(loadTransactions(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsBar);
