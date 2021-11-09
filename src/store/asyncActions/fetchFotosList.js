import { unsplash } from '../../apis/unsplashAPI';
import { getPhotosActionCreator, setIsFetchingActionCreator } from '../reducers/photosReducer';

export const fetchPhotosList = bearer_token => dispatch => {
	dispatch( setIsFetchingActionCreator( true ) );
	unsplash.photos.list( {}, { headers: { Authorization: bearer_token } } ).then( res => {
		dispatch( getPhotosActionCreator( res.response.results ) );
		dispatch( setIsFetchingActionCreator( false ) );
	} );
};
