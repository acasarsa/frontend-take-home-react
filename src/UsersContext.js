import React, { useState, createContext } from 'react';

export const UsersContext = createContext();

export const UsersProvider = props => {
	const [unSortedUsers, setUsers] = useState([]);
	const users = unSortedUsers.sort((a, b) =>
		a.username.localeCompare(b.username)
	);
	return (
		<UsersContext.Provider value={[users, setUsers]}>
			{props.children}
		</UsersContext.Provider>
	);
};
