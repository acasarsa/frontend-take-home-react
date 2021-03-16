// import './App.css';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './Containers/IndexPage';
import UserDetail from './Components/UserDetail';

function App() {
	return (
		<div>
			<Switch>
				<Route path='/users/:id' component={UserDetail} />
				<Route path='/' component={IndexPage} />
			</Switch>
		</div>
	);
}

export default App;
