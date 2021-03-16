import { useState, useEffect } from 'react';
import UserPosts from './UserPosts';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
	Container,
	Heading,
	Card,
	Content,
	Columns,
} from 'react-bulma-components/';

export default function UserPostsCard(props) {
	const { username, userId } = props;
	const [posts, setPosts] = useState([]);

	const fetchUserPosts = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
			.then(resp => resp.json())
			.then(json => setPosts(json));
	};

	useEffect(() => {
		fetchUserPosts();
	}, []);

	const sortedPosts = posts.sort((a, b) => a.title.localeCompare(b.title));

	return (
		<Columns.Column size={6} multiline={3}>
			<Card>
				<Card.Content>
					<Heading size={5}>{username}'s Posts</Heading>
					<div>
						{sortedPosts.map(post => (
							<UserPosts key={post.id} title={post.title} />
						))}
					</div>
				</Card.Content>
			</Card>
		</Columns.Column>
	);
}
