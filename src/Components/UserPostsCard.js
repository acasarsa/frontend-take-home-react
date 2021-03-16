import { useState, useEffect } from 'react';
import UserPosts from './UserPosts';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Heading, Card, Content, Columns } from 'react-bulma-components/';

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
					<Heading size={5}>
						<Link
							to={{
								pathname: `/users/${userId}`,
								state: { ...props },
							}}
						>
							{username}'s Posts
						</Link>
					</Heading>
					<Content>
						{sortedPosts.map(post => (
							<UserPosts key={post.id} title={post.title} />
						))}
					</Content>
				</Card.Content>
			</Card>
		</Columns.Column>
	);
}
