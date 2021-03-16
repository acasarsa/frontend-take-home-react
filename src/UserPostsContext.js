import React, { useState, createContext } from 'react';

export const UserPostsContext = createContext();

export const UserPostsProvider = props => {
	const [unSortedPosts, setPosts] = useState([]);
	const posts = unSortedPosts.sort((a, b) => a.title.localeCompare(b.title));
	return (
		<UserPostsContext.Provider value={[posts, setPosts]}>
			{props.children}
		</UserPostsContext.Provider>
	);
};
