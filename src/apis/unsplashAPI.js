import { createApi } from 'unsplash-js';

export const unsplash = createApi( { accessKey: process.env.REACT_APP_ACCESS_KEY } );

const authenticationUrl = new URL( 'https://unsplash.com/oauth/authorize' );
authenticationUrl.searchParams.set( 'client_id', process.env.REACT_APP_ACCESS_KEY );
authenticationUrl.searchParams.set( 'redirect_uri', process.env.REACT_APP_CALLBACK_URL );
authenticationUrl.searchParams.set( 'response_type', 'code' );
authenticationUrl.searchParams.set( 'scope', 'public+write_likes' );

export const redirectToAuthPage = () => {
	window.location.assign( authenticationUrl );
};
