import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';

const Card = ( { photo } ) => {
	const date = new Date(
		Date.parse( photo.promoted_at || photo.created_at ),
	).toLocaleDateString( 'ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	} );

	const author = photo.user.name || photo.id;

	return (
		<div className={ styles.item } id={ photo.id }>
			<Link to={ `/preview/${ photo.id }` } className={ styles.item__link }>
				<img src={ photo.urls.regular } alt="img" className={ styles.item__img }/>
			</Link>
			<a href={ photo.user.links.html }
			   target="_blank"
			   rel="noopener noreferrer"
			   className={ styles.item__imgAuthorLink }>{ author }</a>
			<div className={ styles.item__imgDate }>{ date }</div>
			<div className={ styles.item__likes }>{ photo.likes }</div>
		</div>
	);
};

export default Card;
