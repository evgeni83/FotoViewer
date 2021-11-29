import { UPDATE_PHOTOS } from '../reducers/photosReducer';

export const updatePhotosActionCreator = photo => (dispatch, getState) => {
	const state = getState();
	const { list } = state.photos;
	const index = list.findIndex( item => item.id === photo.id );
	list[index] = photo;
	dispatch( { type: UPDATE_PHOTOS, payload: list } )
};
