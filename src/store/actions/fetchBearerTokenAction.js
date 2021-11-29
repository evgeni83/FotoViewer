import { setBearerTokenActionCreator } from '../reducers/authReducer';

export const fetchBearerTokenAction = code => dispatch => {
	const data = new FormData();
	data.set( 'client_id', process.env.REACT_APP_ACCESS_KEY );
	data.set( 'client_secret', process.env.REACT_APP_SECRET );
	data.set( 'redirect_uri', process.env.REACT_APP_CALLBACK_URL );
	data.set( 'code', code );
	data.set( 'grant_type', 'authorization_code' );

	fetch( 'https://unsplash.com/oauth/token', {
		method: 'POST',
		body: data,
	} )
		.then( res => res.json() )
		.then( response => dispatch( setBearerTokenActionCreator( response.access_token ) ) );
};
