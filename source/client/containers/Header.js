import {connect} from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state) => ({
	activeCard: state.activeCard,
	user: state.user,
});

export default connect(mapStateToProps)(Header);
