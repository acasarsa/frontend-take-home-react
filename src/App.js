import { Route, Switch } from 'react-router-dom';
import IndexPage from './Containers/IndexPage';
import UserDetail from './Components/UserDetail';
import { UsersProvider } from './UsersContext';

function App() {
	return (
		<div>
			<Switch>
				<UsersProvider>
					<Route path='/users/:id' component={UserDetail} />
					<Route path='/' component={IndexPage} />
				</UsersProvider>
			</Switch>
		</div>
	);
}

export default App;
