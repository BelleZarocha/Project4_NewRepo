import React, { useEffect, useState } from 'react';
import './App.css';
import Packages from './components/Packages/Packages';
import PageLoadingComponent from './components/PageLoading/PageLoading';

function App() {
	const PageLoading = PageLoadingComponent(Packages);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://localhost:8000/api/packages/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Pets Insurance Packages</h1>
			<PageLoading isLoading={appState.loading} packages={appState.posts} />
		</div>
	);
}
export default App; 