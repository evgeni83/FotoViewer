import React from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Auth from './Auth/Auth';
import MainPage from './MainPage/MainPage';
import PreviewPage from './PreviewPage/PreviewPage';
import styles from './app.module.scss';
import { setBearerTokenActionCreator, setCodeActionCreator } from '../store/reducers/authReducer';
import { fetchBearerTokenAction } from '../store/actions/fetchBearerTokenAction';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

	const dispatch = useDispatch();
	const code = useSelector( state => state?.auth.code );
	const bearer_token = useSelector( state => state?.auth.bearer_token );
	let [ searchParams ] = useSearchParams();

	React.useEffect( () => {
		if ( bearer_token && bearer_token !== '' ) {
			localStorage.setItem( 'bearer_token', bearer_token );
			dispatch( setBearerTokenActionCreator( bearer_token ) );
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
			dispatch( fetchBearerTokenAction( code ) );
		}

	}, [ bearer_token, code, dispatch, searchParams ] );

	return (
		<div className={ styles.container }>
			{
				bearer_token === '' ?
					<Auth/> :
					<Routes>
						<Route path="/" element={ <MainPage/> }/>
						<Route path="/preview/:id" element={ <PreviewPage/> }/>
					</Routes>
			}
		</div>
	);
};


export default App;
