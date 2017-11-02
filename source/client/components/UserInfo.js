// @flow

import React from 'react';
import styled from 'react-emotion';

import {User} from '../types/types';

const UserBlock = styled.div`
	display: flex;
	align-items: center;
	font-size: 15px;
	color: #000;
`;

const Avatar = styled.img`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	margin-right: 10px;
`;

/**
 * Инфомрация о пользователе
 * @param {Object} props
 * @returns {JSX}
 */
const UserInfo = ({user: {firstName, lastName, avatarUrl}}) => (
	<UserBlock>
		<Avatar src={avatarUrl || '/assets/avatar.png'} />
		{`${firstName} ${lastName}`}
	</UserBlock>
);

UserInfo.propTypes = {
	user: User,
};

export default UserInfo;
