import { unsplash } from '../../apis/unsplashAPI';
import { setPhotosActionCreator } from './setPhotosAction';
import { setIsFetchingActionCreator } from './setIsFetchingAction';

export const fetchPhotosList = ( { page, perPage, orderBy } ) => ( dispatch, getState ) => {
	const bearer_token = getState().auth.bearer_token;
	dispatch( setIsFetchingActionCreator( true ) );
	unsplash.photos.list( { page, perPage, orderBy }, { headers: { Authorization: bearer_token } } ).then( res => {
		dispatch( setPhotosActionCreator( res.response.results ) );
		dispatch( setIsFetchingActionCreator( false ) );
	} );
};
