import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useParams } from "react-router-dom";
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
function App() {
	

	return (
		<div>
			<Nav />

			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
      		</Routes>

			<Footer />
		</div>
		
	);
}
export default App; 