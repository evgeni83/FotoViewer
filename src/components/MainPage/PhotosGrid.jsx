import React from 'react';
import PhotoCard from './PhotoCard';

const PhotosGrid = ( { list } ) => (
	<div className="contentWrapper">
		{ list.map( photo => <PhotoCard key={ photo.id } photo={ photo }/> ) }
	</div>
);

export default PhotosGrid;
