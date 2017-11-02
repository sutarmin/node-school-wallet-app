// @flow

import React from 'react';
import styled from 'react-emotion';

import Title from './Title';
import UserInfo from './UserInfo';
import {Card, User} from '../types/types';

const HeaderLayout = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 74px;
	background: #fff;
	padding: 20px 30px;
	box-sizing: border-box;
	border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Balance = styled(Title)`
	margin: 0;
`;

const BalanceSum = styled.span`
	font-weight: bold;
`;

/**
 * Шапка страницы
 * @param {Object} props
 * @returns {JSX}
 */
const Header = ({activeCard, user}) => (
	<HeaderLayout>
		<Balance>
			{`${activeCard.bankName}: `}
			<BalanceSum>{`${activeCard.balance} ₽`}</BalanceSum>
		</Balance>
		<UserInfo user={user} />
	</HeaderLayout>
);

Header.propTypes = {
	activeCard: Card,
	user: User,
};

export default Header;
