import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { previewPhotoReducer } from "./previewPhotoReducer";
import { isButtonEnabledReducer } from "./isButtonEnabledReducer";
import { pagesCounterReducer } from "./pagesCounterReducer";

export default combineReducers({
  list: listReducer,
  previewPhoto: previewPhotoReducer,
  isButtonEnabled: isButtonEnabledReducer,
  pagesCounter: pagesCounterReducer
});
