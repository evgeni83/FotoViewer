let initialState = 1;

export const pagesCounterReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'INCREMENT_PAGES_COUNTER':
			const newState = state + 1;
			return newState;

		default:
			return state;
	}
};
