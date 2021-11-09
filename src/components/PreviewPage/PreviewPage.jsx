import React from 'react';
import { Link } from 'react-router-dom';
// import Like from './Like/Like';
import PreviewPhoto from './PreviewPhoto/PreviewPhoto';
import backArrow from './icons8-back-arrow-100.png';
// import Preloader from '../Preloader/Preloader';

const PreviewPage = ( {
	previewPhoto,
	// toggleLikeThePhoto,
	// isButtonEnabled,
	// showThePhoto,
	// togglePhotoSize,
} ) => {
	return (
		<div className="preview">
			{/* <h2>PreviewPage</h2> */ }
			<Link to="/main" className="preview__backToMainPage">
				<img src={ backArrow } alt="BACK"/>
			</Link>
			<a
				href={ previewPhoto.user ? previewPhoto.user.links.html : '#' }
				target="_blank"
				rel="noopener noreferrer"
				className="preview__imgAuthor"
			>
				{ previewPhoto.user
					? previewPhoto.user.name || previewPhoto.id
					: 'noname' }
			</a>
			<p className="preview__imgDate">
				Photo posted at{ ' ' }
				{ new Date(
					Date.parse( previewPhoto.promoted_at || previewPhoto.created_at ),
				).toLocaleDateString( 'ru-Ru', {
					year: 'numeric',
					month: 'numeric',
					day: 'numeric',
				} ) }
			</p>
			<div className="preview__imgLikes">{ previewPhoto.likes } likes</div>
			{/*<Like*/}
			{/*	list={ list }*/}
			{/*	id={ previewPhoto.id }*/}
			{/*	liked_by_user={ previewPhoto.liked_by_user }*/}
			{/*	toggleLikeThePhoto={ toggleLikeThePhoto }*/}
			{/*	isButtonEnabled={ isButtonEnabled }*/}
			{/*/>*/}
			<PreviewPhoto
				urls={ previewPhoto.urls }
				// showThePhoto={ showThePhoto }
				// togglePhotoSize={ togglePhotoSize }
			/>
			{/*<div className="loading"><Preloader/></div>*/}
		</div>
	);
};

export default PreviewPage;
