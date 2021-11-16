import React from 'react';
import Card from './Card/Card';
import styles from './photosGrid.module.scss';

const PhotosGrid = ( { list } ) => (
	<div className={ styles.wrapper }>
		{ list.map( photo => <Card key={ photo.id + Math.random() } photo={ photo }/> ) }
	</div>
);

export default PhotosGrid;
