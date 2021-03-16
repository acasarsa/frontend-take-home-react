import React from 'react';
import { useState, useEffect } from 'react';
import UserPostsCard from '../Components/UserPostsCard';
import NewUserForm from '../Components/NewUserForm';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
	Container,
	Heading,
	Section,
	Columns,
	Box,
} from 'react-bulma-components/';

export default function IndexPage() {
	const [users, setUsers] = useState([]);
	console.log(users);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(resp => resp.json())
			.then(json => setUsers(json));
	};

	return (
		<Section>
			<Heading align='center'>Blog Home Page</Heading>
			<Container>
				<NewUserForm />
			</Container>
			<Section>
				<Heading size={5} align='center'>
					User Post Index
				</Heading>
				<Container flex>
					<Columns>
						{users.map(user => (
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
