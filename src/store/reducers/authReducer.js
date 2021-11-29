const initialState = {
	code: '',
	bearer_token: '',
};

const SET_CODE = 'SET_CODE';
const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN';

export const authReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_CODE:
			return { ...state, code: action.payload };

		case SET_BEARER_TOKEN:
			return { ...state, bearer_token: action.payload };

		default:
			return state;
	}
};

export const setCodeActionCreator = code => ( { type: SET_CODE, payload: code } );
export const setBearerTokenActionCreator = access_token => ( { type: SET_BEARER_TOKEN, payload: access_token } );
