import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPageContainer from './MainPage/MainPageContainer';
import PreviewPageContainer from './PreviewPage/PreviewPageContainer';
// import { authorize } from '../store/actions/authAction';
import './App.css';
import Home from './Home/Home';

const App = () => {

	return (
		<Router>
			<div className="container">
				<Routes>
					<Route path="/" element={ <Home/> }/>
					<Route path="/main" element={ <MainPageContainer /> }/>
					<Route path="/preview/:id" element={ <PreviewPageContainer /> }/>
				</Routes>
			</div>
		</Router>
	);
};


export default App;
