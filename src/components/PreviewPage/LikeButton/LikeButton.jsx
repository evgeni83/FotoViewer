import React from 'react';
import liked from './liked.png';
import unliked from './unliked.png';
import styles from './likeButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikePhotoActionCreator } from '../../../store/actions/fetchLikePhotoAction';

const LikeButton = ( { id, liked_by_user } ) => {
	const dispatch = useDispatch();
	const is_like_fetching = useSelector( state => state.photos.is_like_fetching );

	let heart = unliked;
	let method = 'POST';

	if ( liked_by_user ) {
		heart = liked;
		method = 'DELETE';
	}

	const likeThePhoto = () => {
		dispatch( fetchLikePhotoActionCreator( id, method ) );
	};

	return (
		<button className={ styles.button }
				id={ id }
				disabled={ is_like_fetching }
				onClick={ likeThePhoto }><img src={ heart } alt="like" className={ styles.image }/></button>
	);
};

export default LikeButton;
