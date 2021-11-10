import { setPhotoForPreviewActionCreator } from './setPhotoForPreviewAction';
import { updatePhotosActionCreator } from './updatePhotosAction';

export const fetchLikePhotoActionCreator = ( id, method ) => ( dispatch, getState ) => {
	const { bearer_token } = getState().auth;
	fetch( `https://api.unsplash.com/photos/${ id }/like`, {
		method: method,
		headers: { Authorization: 'Bearer ' + bearer_token },
	} ).then( res => res.json() )
		.then( response => {
			dispatch( setPhotoForPreviewActionCreator( response.photo ) );
			dispatch( updatePhotosActionCreator( response.photo ) );
		} );
};
