import { combineReducers } from 'redux';
import { listReducer } from './listReducer';
import { previewReducer } from './previewReducer';
import { likeReducer } from './likeReducer';

export default combineReducers({
  list: listReducer,
  preview: previewReducer,
  like: likeReducer
});
