import React from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from './photo.module.scss';

const Photo = ( { src, alt } ) => {

	const [ isLoaded, setIsLoaded ] = React.useState( false );
	const [ isFull, setIsFull ] = React.useState( false );

	const showThePhoto = () => {
		setIsLoaded( true );
	};

	const toggleView = () => {
		setIsFull( isFull => !isFull );
	};

	return (
		<div className={ [ styles.wrapper, isFull ? styles.wrapperFull : null ].join( ' ' ) }>
			<img src={ src }
				 alt={ alt || 'preview' }
				 className={ [ styles.photo, isLoaded ? styles.loaded : null ].join( ' ' ) }
				 onLoad={ showThePhoto }
				 onClick={ toggleView }/>
			{ !isLoaded ? <div className={ styles.preloader }><Preloader/></div> : null }
		</div>
	);
};

export default Photo;
