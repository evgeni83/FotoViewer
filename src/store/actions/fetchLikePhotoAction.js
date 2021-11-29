import { setPhotoForPreviewActionCreator } from './setPhotoForPreviewAction';
import { updatePhotosActionCreator } from './updatePhotosAction';
import { setIsLikeFetchingActionCreator } from './setIsLikeFetchingAction';

export const fetchLikePhotoActionCreator = ( id, method ) => ( dispatch, getState ) => {
	const { bearer_token } = getState().auth;
	dispatch( setIsLikeFetchingActionCreator( true ) );
	fetch( `https://api.unsplash.com/photos/${ id }/like`, {
		method: method,
		headers: { Authorization: 'Bearer ' + bearer_token },
	} ).then( res => res.json() )
		.then( response => {
			dispatch( setPhotoForPreviewActionCreator( response.photo ) );
			dispatch( setIsLikeFetchingActionCreator( false ) );
			dispatch( updatePhotosActionCreator( response.photo ) );
		} );
};
