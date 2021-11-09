let initialState = {
	list: [],
	is_fetching: false
};

const GET_PHOTOS = 'GET_PHOTOS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const photosReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case GET_PHOTOS:
			return { ...state, list: action.payload };

		case SET_IS_FETCHING:
			return { ...state, is_fetching: action.payload };

		default:
			return state;
	}
};

export const getPhotosActionCreator = list => ( { type: GET_PHOTOS, payload: list } );
export const setIsFetchingActionCreator = value => ( { type: SET_IS_FETCHING, payload: value } );
