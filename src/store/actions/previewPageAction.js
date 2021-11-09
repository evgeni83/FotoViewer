import { unsplash } from '../../apis/unsplashAPI';

export const getThePhoto = (
	list,
	id,
	numberOfPages,
	photosPerPage,
) => dispatch => {
	unsplash.auth.setBearerToken( localStorage.getItem( 'unsplashBearerToken' ) );

	const previewPhoto = list.find( item => item.id === id );

	if ( previewPhoto ) {
		return dispatch( setPreviewPhoto( previewPhoto ) );
	} else {
		return unsplash.photos
			.get( numberOfPages, photosPerPage, 'latest' )
			.then( result => {
				dispatch( { type: 'GET_NEW_LIST_OF_PHOTOS', list: result.response } );
				const previewPhoto = list.find( item => item.id === id );
				dispatch( setPreviewPhoto( previewPhoto ) );
			} );
	}
};

export const toggleLikeThePhoto = ( list, id, liked_by_user ) => dispatch => {
	dispatch( isButtonEnabledAC( false ) );
	if ( !liked_by_user ) {
		return unsplash.photos
			.likePhoto( id )
			.then( json => {
				dispatch( setLikeStatus( json.photo ) );
				const previewPhoto = list.find( item => item.id === json.photo.id );
				dispatch( setPreviewPhoto( previewPhoto ) );
				dispatch( isButtonEnabledAC( true ) );
			} );
	} else {
		return unsplash.photos
			.unlikePhoto( id )
			.then( json => {
				dispatch( setLikeStatus( json.photo ) );
				const previewPhoto = list.find( item => item.id === json.photo.id );
				dispatch( setPreviewPhoto( previewPhoto ) );
				dispatch( isButtonEnabledAC( true ) );
			} );
	}
};

export const isButtonEnabledAC = isEnabled => {
	return { type: 'IS_BUTTON_ENABLED', isEnabled };
};

const setPreviewPhoto = previewPhoto => {
	return { type: 'SET_PREVIEW_PHOTO', previewPhoto };
};

const setLikeStatus = photo => {
	return { type: 'SET_LIKE_STATUS', photo };
};
