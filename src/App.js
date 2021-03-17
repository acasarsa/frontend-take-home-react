// import './App.css';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './Containers/IndexPage';
import UserDetail from './Components/UserDetail';

function App() {
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
