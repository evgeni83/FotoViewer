import { unsplash } from '../../apis/unsplashAPI';
import { setIsFetchingActionCreator, setPhotoForPreviewActionCreator } from '../reducers/photosReducer';

export const fetchPhotoForPreviewActionCreator = id => ( dispatch, getState ) => {
	const state = getState();
	const list = state.photos.list;
	const bearer_token = state.auth.bearer_token;
	if ( list.length === 0 ) {
		dispatch( setIsFetchingActionCreator( true ) );
		unsplash.photos.get( { photoId: id }, { headers: { Authorization: bearer_token } } ).then( res => {
			dispatch( setPhotoForPreviewActionCreator( res.response ) );
			dispatch( setIsFetchingActionCreator( false ) );
		} );
	} else {
		const previewPhoto = list?.find( photo => photo.id === id );
		dispatch( setPhotoForPreviewActionCreator( previewPhoto ) );
	}
};
