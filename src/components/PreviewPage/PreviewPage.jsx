import React from 'react';
import './PreviewPage.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import backArrow from './icons8-back-arrow-100.png';
import PreviewPhoto from './Photo';
import { fetchPhotoForPreviewActionCreator } from '../../store/asyncAction/fetchPhotoForPreviewAction';
import Preloader from '../Preloader/Preloader';

const PreviewPage = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const photo_for_preview = useSelector( state => state?.photos.photo_for_preview );

	React.useEffect( () => {
		dispatch( fetchPhotoForPreviewActionCreator( params.id ) );
	}, [ dispatch, params ] );


	if ( !photo_for_preview || Object.keys( photo_for_preview ).length === 0 ) return <Preloader/>;

	return (
		<div className="preview">
			{/* <h2>PreviewPage</h2> */ }
			<Link to="/" className="preview__backToMainPage">
				<img src={ backArrow } alt="BACK"/>
			</Link>
			<a href={ photo_for_preview.user ? photo_for_preview.user.links.html : '#' }
			   target="_blank"
			   rel="noopener noreferrer"
			   className="preview__imgAuthor">
				{ photo_for_preview.user
					? photo_for_preview.user.name || photo_for_preview.id
					: 'noname' }
			</a>
			<p className="preview__imgDate">
				Photo posted at{ ' ' }
				{ new Date(
					Date.parse( photo_for_preview.promoted_at || photo_for_preview.created_at ),
				).toLocaleDateString( 'ru-Ru', {
					year: 'numeric',
					month: 'numeric',
					day: 'numeric',
				} ) }
			</p>
			<div className="preview__imgLikes">{ photo_for_preview.likes } likes</div>
			{/*<Like*/ }
			{/*	list={ list }*/ }
			{/*	id={ photo_for_preview.id }*/ }
			{/*	liked_by_user={ photo_for_preview.liked_by_user }*/ }
			{/*	toggleLikeThePhoto={ toggleLikeThePhoto }*/ }
			{/*	isButtonEnabled={ isButtonEnabled }*/ }
			{/*/>*/ }
			<PreviewPhoto
				src={ photo_for_preview.urls.full }
			/>
			{/*<div className="loading"><Preloader/></div>*/ }
		</div>
	);

	// return <h1>{ params.id }</h1>
};

export default PreviewPage;
