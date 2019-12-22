import { combineReducers } from 'redux';
import { listReducer } from './listReducer';
import { previewPhotoReducer } from "./previewPhotoReducer";

export default combineReducers({
  list: listReducer,
  previewPhoto: previewPhotoReducer,
});
