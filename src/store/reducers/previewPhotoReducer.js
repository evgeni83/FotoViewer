let initialState = {};

export const previewPhotoReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'SET_PREVIEW_PHOTO':
			return action.previewPhoto;
		default:
			return state;
	}
};
