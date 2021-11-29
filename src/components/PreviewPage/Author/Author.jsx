import React from 'react';
import styles from './author.module.scss';

const Author = ( { href, name } ) => (
	<a href={ href }
	   target="_blank"
	   rel="noopener noreferrer"
	   className={ styles.link }>{ name }</a>
);


export default Author;
