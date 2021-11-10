import React from 'react';
import liked from './liked.png';
import unliked from './unliked.png';
import './Like.css';
import { useDispatch } from 'react-redux';
import { fetchLikePhotoActionCreator } from '../../../store/actions/fetchLikePhotoAction';

const Like = ( { id, liked_by_user } ) => {
	const dispatch = useDispatch();

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
		<button className="likeButton"
				id={ id }
				onClick={ likeThePhoto }><img src={ heart } alt="like" className="likeButtonImage"/></button>
	);
};

export default Like;
