import { createApi } from 'unsplash-js';

export const unsplash = createApi( { accessKey: process.env.REACT_APP_ACCESS_KEY } );

let authenticationUrl = 'https://unsplash.com/oauth/authorize';
authenticationUrl += '?client_id=' + process.env.REACT_APP_ACCESS_KEY;
authenticationUrl += '&redirect_uri=' + process.env.REACT_APP_CALLBACK_URL;
authenticationUrl += '&response_type=code';
authenticationUrl += '&scope=public+write_likes';

export const redirectToAuthPage = () => {
	window.location.assign( authenticationUrl );
};
