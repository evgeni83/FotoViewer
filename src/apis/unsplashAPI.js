import Unsplash from "unsplash-js";

export const unsplash = new Unsplash( {
    accessKey: process.env.REACT_APP_ACCESS_KEY,
    secret: process.env.REACT_APP_SECRET,
    callbackUrl: process.env.REACT_APP_CALLBACK_URL
    // ""
} );

export const authenticationUrl = unsplash.auth.getAuthenticationUrl( [
    "public",
    "write_likes"
] );

export const redirectToAuthPage = () => {
    window.location.assign( authenticationUrl );
};
