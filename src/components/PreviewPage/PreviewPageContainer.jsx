import React from 'react';
import './PreviewPage.css';
import PreviewPage from './PreviewPage';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PreviewPageContainer = () => {
	const params = useParams();
	const list = useSelector( state => state?.photos.list );

	const previewPhoto = list.find( photo => photo.id == params.id )

	// componentDidMount() {
	// 	const list = this.props.list;
	// 	const previewPhotoId = this.props.match.params.photoId;
	// 	const numberOfPages = this.props.pagesCounter;
	// 	const photosPerPage = this.props.photosPerPage;
	// 	this.props.getThePhoto( list, previewPhotoId, numberOfPages, photosPerPage );
	// }
	//
	// showThePhoto = e => {
	// 	e.persist();
	// 	e.target.classList.add( 'loaded' );
	// };
	//
	// togglePhotoSize = e => {
	// 	e.persist();
	// 	if ( [ ...e.target.classList ].find( item => item === 'preview__photo_fullSize' ) ) {
	// 		e.target.classList.remove( 'preview__photo_fullSize' );
	// 	} else {
	// 		e.target.classList.add( 'preview__photo_fullSize' );
	// 	}
	// };


	return (
		<PreviewPage
			previewPhoto={ previewPhoto }
			// toggleLikeThePhoto={ toggleLikeThePhoto }
			// isButtonEnabled={ isButtonEnabled }
			// showThePhoto={ showThePhoto }
			// togglePhotoSize={ togglePhotoSize }
		/>
	);

	// return <h1>{ params.id }</h1>
};

export default PreviewPageContainer;
