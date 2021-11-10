import React from 'react';
import Preloader from '../Preloader/Preloader';

export default ( { src } ) => {

	const [ isLoaded, setIsLoaded ] = React.useState( false );
	const [ isFull, setIsFull ] = React.useState( false );

	const showThePhoto = () => {
		setIsLoaded( true );
	};

	const toggleView = () => {
		setIsFull( isFull => !isFull );
	};

	return (
		<div className={ [ 'preview__photo-wrapper', isFull ? 'preview__photo-wrapper--full' : null ].join( ' ' ) }>
			<img src={ src }
				 alt="img"
				 className={ [ 'preview__photo', isLoaded ? 'loaded' : null ].join( ' ' ) }
				 onLoad={ showThePhoto }
				 onClick={ toggleView }/>
			{
				!isLoaded ?
					<div className="preview__preloader">
						<Preloader/>
					</div> :
					null
			}
		</div>
	);

};
