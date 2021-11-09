import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Auth from '../Auth/Auth';
import MainPageContainer from '../MainPage/MainPageContainer';
import { setBearerTokenActionCreator, setCodeActionCreator } from '../../store/reducers/authReducer';
import { fetchBearerToken } from '../../store/asyncActions/fetchBearerToken';

const Home = () => {
	const dispatch = useDispatch();
	const code = useSelector( state => state?.auth.code );
	const bearer_token = useSelector( state => state?.auth.bearer_token );
	let [ searchParams ] = useSearchParams();

	React.useEffect( () => {
		if ( bearer_token && bearer_token !== '' ) {
			localStorage.setItem( 'bearer_token', bearer_token );
			return;
		}

		if ( localStorage.hasOwnProperty( 'bearer_token' ) ) {
			dispatch( setBearerTokenActionCreator( localStorage.getItem( 'bearer_token' ) ) );
			return;
		}

		if ( code === '' && searchParams.has( 'code' ) ) {
			dispatch( setCodeActionCreator( searchParams.get( 'code' ) ) );
			return;
		}

		if ( code !== '' ) {
			dispatch( fetchBearerToken( code ) );
		}

	}, [ bearer_token, code, dispatch, searchParams ] );

	return (
		<div>
			{
				bearer_token && bearer_token !== '' ?
					<MainPageContainer/> :
					<Auth/>
			}
		</div>
	);
};

export default Home;
