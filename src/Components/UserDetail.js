import React from 'react';

export default function UserDetail(props) {
	const {
		username,
		email,
		address,
		phone,
		website,
		company,
	} = props.location.state;
	console.log('props', props.location.state);
	console.log(username);
	return (
		<div>
			<h1>{username}'s Page</h1>
		</div>
	);
}
