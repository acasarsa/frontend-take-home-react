import React from 'react';
import UserPosts from '../Components/UserPosts';
import { Heading, Section, Box } from 'react-bulma-components/';

export default function UserDetail(props) {
	const {
		username,
		email,
		address,
		phone,
		website,
		company,
	} = props.location.state.props;

	const sortedPosts = props.location.state.posts;

	return (
		<Section>
			<Heading align='center'>{username}'s Page</Heading>
			<Box>
				<Heading size={6}>Username: {username} </Heading>
				<Heading size={6}>Company: {company.name} </Heading>
				<Heading size={6}>
					Address: {address.street} Ave., {address.suite}, {address.city}, USA
				</Heading>
				<Heading size={6}>Email: {email} </Heading>
				<Heading size={6}>Phone: {phone} </Heading>
				<Heading size={6}>Website: {website} </Heading>
			</Box>
			<Section>
				<Heading size={4}>Posts</Heading>
				<div>
					{sortedPosts.map(post => (
						<UserPosts key={post.id} title={post.title} />
					))}
				</div>
			</Section>
		</Section>
	);
}
