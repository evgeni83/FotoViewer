import React from 'react';
import { useSelector } from 'react-redux';
import Auth from '../Auth/Auth';
import MainPage from '../MainPage/MainPage';

const Home = () => {
	const bearer_token = useSelector( state => state?.auth.bearer_token );

	return (
		<>
			{
				bearer_token && bearer_token !== '' ?
					<MainPage/> :
					<Auth/>
			}
		</>
	);
};

export default Home;
