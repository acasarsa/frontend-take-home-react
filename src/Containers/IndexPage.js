import React from 'react';
import { useState, useEffect } from 'react';
import UserPostsCard from '../Components/UserPostsCard';
import NewUserForm from '../Components/NewUserForm';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Heading, Section, Columns } from 'react-bulma-components/';

export default function IndexPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers();
	}, [users]);

	const fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(resp => resp.json())
			.then(json => setUsers(json));
	};

	const createUser = async (e, username, company, email) => {
		e.preventDefault();
		console.log('hit');

		const newUser = { username, company, email };

		console.log('newUser', newUser);

		await fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then(resp => resp.json())
			.then(newUser => setUsers([...users, newUser]));
	};

	const sortedUsers = users.sort((a, b) =>
		a.username.localeCompare(b.username)
	);
	return (
		<Section>
			<Heading align='center'>Blog Home Page</Heading>
			<Container>
				<NewUserForm createUser={createUser} />
			</Container>
			<Section>
				<Heading size={5} align='center'>
					User Post Index
				</Heading>
				<Container>
					<Columns>
						{sortedUsers.map(user => (
							<UserPostsCard
								key={user.id}
								userId={user.id}
								username={user.username}
								email={user.email}
								address={user.address}
								phone={user.phone}
								website={user.website}
								company={user.company}
							/>
						))}
					</Columns>
				</Container>
			</Section>
		</Section>
	);
}
