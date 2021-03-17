// import './App.css';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import IndexPage from './Containers/IndexPage';
import UserDetail from './Components/UserDetail';

function App() {
	let location = useLocation();

	console.log('location', location.state);
	return (
		<div>
			<Switch>
				{/* {location.state !== undefined ? ( */}
				<Route path='/users/:id' component={UserDetail} />
				{/* ) : (
					<Redirect to='/' />
				)} */}

				<Route path='/' component={IndexPage} />
			</Switch>
		</div>
	);
}

export default App;
