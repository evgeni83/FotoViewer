let initialState = true;

export const isButtonEnabledReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'IS_BUTTON_ENABLED':
			return action.isEnabled;

		default:
			return state;
	}
};
