import { combineReducers } from 'redux';
import { listReducer } from './listReducer';
import { previewReducer } from './previewReducer';

export default combineReducers({
  list: listReducer,
  preview: previewReducer
});
