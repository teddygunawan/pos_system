import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import * as Page from './pages';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Navbar />

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/products" component={Page.Products}/>>
                    <Route path="/users">
                        <Page.Users />
                    </Route>
                    <Route path="/">
                        <Page.Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
