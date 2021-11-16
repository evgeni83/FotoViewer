import React from 'react';
import styles from './image.module.scss';
import { Link } from 'react-router-dom';

const Image = ( { id, src, alt } ) => (
	<Link to={ `/preview/${ id }` } className={ styles.link }>
		<img src={ src } alt={ alt } className={ styles.img }/>
	</Link>
);

export default Image;
