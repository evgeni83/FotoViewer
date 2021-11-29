import React from 'react';
import styles from './card.module.scss';
import Image from './Image/Image';
import { useSelector } from 'react-redux';

const Card = ( { photo } ) => {
	const date = new Date(
		Date.parse( photo.promoted_at || photo.created_at ),
	).toLocaleDateString( 'ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	} );

	const { photo_for_preview } = useSelector( state => state?.photos );

	const ref = React.useRef();

	const author = photo.user.name || photo.id;

	React.useEffect( () => {
		if ( photo_for_preview.id === ref.current.id ) {
			ref.current.scrollIntoView()
		}
	})

	return (
		<div className={ styles.item } id={ photo.id } ref={ ref }>
			<Image id={ photo.id } src={ photo.urls.regular } alt={ photo.alt_description }/>
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
