# Getting Started with Create React App

Based on my interpretation of the assignment where it mentioned which details to display on the User Detail page (username, email, address, phone, website, and company) I sorted by username rather than name.

# Things I'd do differently if this was a real app

One issue is with server pings. Due to how the API is set up I have to make multiple requests to get the user's name from https://jsonplaceholder.typicode.com/users and the user's posts from `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`. In this small app there are only 10 users so this is not a big deal, but it could definitely be an issue for scaling. Some solutions to this would be to implement an infinite scroll either from scratch or with a npm package. Another way would be to add a serializer or use graphQL to access a user's posts from the users json.
