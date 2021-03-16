const titleize = require('titleize');

export default function UserPosts({ title }) {
	let titleizedTitle = titleize(title);
	return <div>{titleizedTitle}</div>;
}
