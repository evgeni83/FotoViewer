import React from 'react';
import { redirectToAuthPage } from '../../apis/unsplashAPI';

const Auth = () => {
	return (
		<div>
			<h1>You need to log in as unsplash user</h1>
			<button onClick={ redirectToAuthPage }>Authorize</button>
		</div>
	);
};

export default Auth;
