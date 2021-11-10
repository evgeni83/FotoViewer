import React from 'react';
import { Link } from 'react-router-dom';

const PhotoCard = ( { photo } ) => {
	const date = new Date(
		Date.parse( photo.promoted_at || photo.created_at ),
	).toLocaleDateString( 'ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	} );

	const author = photo.user.name || photo.id;

	return (
		<div className="imageCard">
			<Link to={ `/preview/${ photo.id }` } className="imageCard__link">
				<img src={ photo.urls.regular } alt="img" className="imageCard__img"/>
			</Link>
			<a href={ photo.user.links.html }
			   target="_blank"
			   rel="noopener noreferrer"
			   className="imageCard__imgAuthorlink">{ author }</a>
			<p className="imageCard__imgDate">{ date }</p>
			<p className="imageCard__likes">{ photo.likes }</p>
		</div>
	);
};

export default PhotoCard;
