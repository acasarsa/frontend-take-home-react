# FrontEnd Take Home

## System Requirements
- [Git](https://git-scm.com/) 2.19.2
- [React](https://www.npmjs.com/package/react/v/17.0.1) 17.0.1
- [npm](https://www.npmjs.com/package/npm/v/6.14.9) 6.14.9

## Setup 
```
git clone https://github.com/acasarsa/frontend-take-home-react.git
cd frontend-take-home-react
```
once in the directory 
``` 
 npm install 
 npm start
```
this will run the app on localhost:3000

## Some assumptions
Based on my interpretation of the assignment where it mentioned which details to display on the User Detail page (username, email, address, phone, website, and company) I sorted by username rather than name. For the create user form I kept the form short and only included username and email. 

## Things I'd do differently if this was a real app

One issue is with server pings. Due to how the API is set up I have to make multiple requests to get the user's name from https://jsonplaceholder.typicode.com/users and the user's posts from `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`. In this small app there are only 10 users so this is not a big deal, but it could definitely be an issue for scaling. Some solutions to this would be to implement an infinite scroll either from scratch or with a npm package. Another way would be to add a serializer or use GraphQL to access a user's posts from the users json.

Due to time constraints and that the assignment didn't require it I omited form validations and did not account for the edge case where using react-route Link causes an error if a user goes directly to the route. 
