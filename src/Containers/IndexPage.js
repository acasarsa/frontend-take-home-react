import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { UsersContext } from '../UsersContext';
import UserPostsCard from '../Components/UserPostsCard';
import NewUserForm from '../Components/NewUserForm';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Heading, Section, Columns } from 'react-bulma-components/';

export default function IndexPage() {
	const [users, setUsers] = useContext(UsersContext);

	const createUser = (e, username, email, errors) => {
		e.preventDefault();
		e.stopPropagation();
		console.log(errors);

		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			body: JSON.stringify({ username: username, email: email }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then(resp => resp.json())
			.then(json => {
				setUsers([...users, json]);
				console.log(json);
			});
	};

	const sortedUsers = users.sort((a, b) =>
		a.username.localeCompare(b.username)
	);

	const location = useLocation();
	const detailPath = location.pathname.includes('/users/');

	const renderIndex = () => {
		if (detailPath) {
			return null;
		} else {
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
	};

	return renderIndex();
}
