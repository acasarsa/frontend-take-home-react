import React from 'react';
import UserPosts from '../Components/UserPosts';
import { Heading, Section, Box, Button } from 'react-bulma-components/';
import { useHistory, matchPath } from 'react-router-dom';

export default function UserDetail(props) {
	const {
		username,
		email,
		address,
		phone,
		website,
		company,
	} = props.location.state.props;
	console.log('props', props);
	console.log('props', props.match.params.id);

	const match = matchPath(props.match.url);

	const sortedPosts = props.location.state.posts;

	const history = useHistory();

	return (
		<Section>
			<Heading align='center'>{username}'s Page</Heading>
			<div style={{ margin: '1em' }}>
				<Button color='primary' onClick={() => history.goBack()}>
					<span>Go Back</span>
				</Button>
			</div>
			<Box>
				{username ? (
					<Heading size={6}>Username: {username} </Heading>
				) : (
					<Heading size={6}>Username: N/A </Heading>
				)}
				{company ? (
					<Heading size={6}>Company: {company.name} </Heading>
				) : (
					<Heading size={6}>Company: N/A </Heading>
				)}
				{address ? (
					<Heading size={6}>
						Address: {address.street} Ave., {address.suite}, {address.city}, USA
					</Heading>
				) : (
					<Heading size={6}>Address: N/A</Heading>
				)}
				{email ? (
					<Heading size={6}>Email: {email} </Heading>
				) : (
					<Heading size={6}>Email: N/A</Heading>
				)}
				{phone ? (
					<Heading size={6}>Phone: {phone} </Heading>
				) : (
					<Heading size={6}>Phone: N/A</Heading>
				)}
				{website ? (
					<Heading size={6}>Website: {website} </Heading>
				) : (
					<Heading size={6}>Website: N/A </Heading>
				)}
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
