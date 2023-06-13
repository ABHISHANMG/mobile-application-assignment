import JokesPage from './components/jokes/jokes';
import Login from './components/login/login';


import { Route, Switch, BrowserRouter } from 'react-router-dom';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact component={Login} path='/' />
            <Route exact component={JokesPage} path="/jokespage" />
        </Switch>
    </BrowserRouter>
);

export default App;