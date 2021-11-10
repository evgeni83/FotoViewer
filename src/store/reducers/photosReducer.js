let initialState = {
	list: [],
	current_page: 1,
	per_page: 20,
	order_by: 'latest',
	photo_for_preview: {},
	is_fetching: false,
};

const SET_PHOTOS = 'SET_PHOTOS';
const SET_PHOTO_FOR_PREVIEW = 'SET_PHOTO_FOR_PREVIEW';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const photosReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_PHOTOS:
			return { ...state, list: state.list.concat( ...action.payload ) };

		case SET_CURRENT_PAGE:
			return { ...state, current_page: action.payload };

		case SET_PHOTO_FOR_PREVIEW:
			return { ...state, photo_for_preview: action.payload };

		case SET_IS_FETCHING:
			return { ...state, is_fetching: action.payload };

		default:
			return state;
	}
};

export const setPhotosActionCreator = payload => ( { type: SET_PHOTOS, payload } );
export const setCurrentPageActionCreator = payload => ( { type: SET_CURRENT_PAGE, payload } );
export const setPhotoForPreviewActionCreator = payload => ( { type: SET_PHOTO_FOR_PREVIEW, payload } );
export const setIsFetchingActionCreator = payload => ( { type: SET_IS_FETCHING, payload } );
