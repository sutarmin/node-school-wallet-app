import PropTypes from 'prop-types';

export const CardTheme = PropTypes.shape({
	backgroundColor: PropTypes.string.isRequired,
	textColor: PropTypes.string.isRequired,
	bankLogoUrl: PropTypes.string.isRequired,
	brandLogoUrl: PropTypes.string.isRequired,
});

export const Card = PropTypes.shape({
	id: PropTypes.number.isRequired,
	balance: PropTypes.number.isRequired,
	number: PropTypes.string.isRequired,
	bankName: PropTypes.string.isRequired,
	theme: CardTheme.isRequired,
});

export const User = PropTypes.shape({
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	avatarUrl: PropTypes.string,
});

export const TransactionTheme = PropTypes.shape({
	bankSmLogoUrl: PropTypes.string,
});

export const Transaction = PropTypes.shape({
	id: PropTypes.number.isRequired,
	time: PropTypes.string.isRequired,
	theme: TransactionTheme.isRequired,
	description: PropTypes.string.isRequired,
	sum: PropTypes.number.isRequired,
});
