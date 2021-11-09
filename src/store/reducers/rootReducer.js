import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { photosReducer } from './photosReducer';

import { listReducer } from './listReducer';
import { previewPhotoReducer } from './previewPhotoReducer';
import { isButtonEnabledReducer } from './isButtonEnabledReducer';
import { pagesCounterReducer } from './pagesCounterReducer';
import { photosPerPageReducer } from './photosPerPageReducer';

export default combineReducers( {
	auth: authReducer,
	photos: photosReducer,

	list: listReducer,
	previewPhoto: previewPhotoReducer,
	isButtonEnabled: isButtonEnabledReducer,
	pagesCounter: pagesCounterReducer,
	photosPerPage: photosPerPageReducer,
} );
