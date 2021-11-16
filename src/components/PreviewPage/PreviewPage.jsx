import React from 'react';
import styles from './previewPage.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotoForPreviewActionCreator } from '../../store/actions/fetchPhotoForPreviewAction';
import Photo from './Photo/Photo';
import Preloader from '../Preloader/Preloader';
import LikeButton from './LikeButton/LikeButton';
import BackArrow from './BackArrow/BackArrow';
import Author from './Author/Author';
import PostedDate from './PostedDate/PostedDate';
import LikesAmount from './LikesAmount/LikesAmount';

const PreviewPage = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const photo_for_preview = useSelector( state => state?.photos.photo_for_preview );

	const date = new Date(
		Date.parse( photo_for_preview.promoted_at || photo_for_preview.created_at ),
	).toLocaleDateString( 'ru-Ru', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	} );

	React.useEffect( () => {
		if ( photo_for_preview.id === params.id ) return;
		dispatch( fetchPhotoForPreviewActionCreator( params.id ) );
	}, [ dispatch, params, photo_for_preview ] );


	if ( !photo_for_preview || Object.keys( photo_for_preview ).length === 0 ) return <Preloader/>;

	return (
		<main className={ styles.content }>
			<BackArrow/>
			<Author href={ photo_for_preview.user.links.html } name={ photo_for_preview.user.name }/>
			<PostedDate date={ date }/>
			<LikesAmount likes={ photo_for_preview.likes }/>
			<LikeButton id={ photo_for_preview.id } liked_by_user={ photo_for_preview.liked_by_user }/>
			<Photo src={ photo_for_preview.urls.full } alt={ photo_for_preview.alt_description }/>
		</main>
	);
};

export default PreviewPage;
