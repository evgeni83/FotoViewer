let initialState = {
	list: [],
	current_page: 1,
	per_page: 30,
	order_by: 'latest',
	photo_for_preview: {},
	is_fetching: false,
	is_like_fetching: false,
};

export const ADD_PHOTOS = 'ADD_PHOTOS';
export const UPDATE_PHOTOS = 'UPDATE_PHOTOS';
export const SET_PHOTO_FOR_PREVIEW = 'SET_PHOTO_FOR_PREVIEW';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_IS_LIKE_FETCHING = 'SET_IS_LIKE_FETCHING';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const photosReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case ADD_PHOTOS:
			return { ...state, list: state.list.concat( ...action.payload ) };

		case SET_CURRENT_PAGE:
			return { ...state, current_page: action.payload };

		case SET_PHOTO_FOR_PREVIEW:
			return { ...state, photo_for_preview: action.payload };

		case SET_IS_FETCHING:
			return { ...state, is_fetching: action.payload };

		case SET_IS_LIKE_FETCHING:
			return { ...state, is_like_fetching: action.payload };

		case UPDATE_PHOTOS:
			return { ...state, list: action.payload };

		default:
			return state;
	}
};

