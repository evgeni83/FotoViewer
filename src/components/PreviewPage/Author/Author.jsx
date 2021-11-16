import React from 'react';
import styles from './author.module.scss';

const Author = ( { user, id } ) => (
	<a href={ user ? user.links.html : '#' }
	   target="_blank"
	   rel="noopener noreferrer"
	   className={ styles.link }>
		{ user
			? user.name || id
			: 'noname' }
	</a>
);


export default Author;
