import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceworker from './serviceworker';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route exact path="/" component={App} />
			</Routes>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));
serviceworker.unregister();
