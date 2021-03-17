import React, { useState, createContext, useEffect } from 'react';

export const UsersContext = createContext();

export const UsersProvider = props => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(resp => resp.json())
			.then(json => setUsers(json));
	};

	return (
		<UsersContext.Provider value={[users, setUsers]}>
			{props.children}
		</UsersContext.Provider>
	);
};
