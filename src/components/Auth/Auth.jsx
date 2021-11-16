import React from 'react';
import { redirectToAuthPage } from '../../apis/unsplashAPI';
import styles from './auth.module.scss';

const Auth = () => {
	return (
		<div className={styles.wrapper}>
			<h1>You need to log in as unsplash user</h1>
			<button className={ styles.button } onClick={ redirectToAuthPage }>Log in</button>
		</div>
	);
};

export default Auth;
