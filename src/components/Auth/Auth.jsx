import React from 'react';
import { redirectToAuthPage } from '../../apis/unsplashAPI';
import './Auth.css';

const Auth = () => {
	return (
		<div className="loginScreen">
			<h1 className="loginScreen__title">You need to log in as unsplash user</h1>
			<button className="loginScreen__button" onClick={ redirectToAuthPage }>Log in</button>
		</div>
	);
};

export default Auth;
