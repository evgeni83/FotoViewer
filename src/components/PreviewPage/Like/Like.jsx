import React from 'react';
import liked from './liked.png';
import unliked from './unliked.png';
import './Like.css';
import { useDispatch, useSelector } from 'react-redux';
import { setBearerTokenActionCreator } from '../../../store/reducers/authReducer';

const Like = ( { id, liked_by_user } ) => {
	const dispatch = useDispatch();
	const bearer_token = useSelector( state => state?.auth.bearer_token );

	let heart = unliked;

	const likeThePhoto = event => {
		console.log( '+', event.currentTarget.id );
		fetch( `https://api.unsplash.com/photos/${ id }/like`, {
			method: 'POST',
			headers: { Authorization: `${process.env.REACT_APP_ACCESS_KEY}` },
		} ).then( res => res.json() )
			.then( response => {
				console.log( response );
			} );
	};

	const unlikeThePhoto = event => {
		console.log( '-', event.currentTarget.id );
	};

	let clickHandler = likeThePhoto;

	if ( liked_by_user ) {
		heart = liked;
		clickHandler = unlikeThePhoto;
	}

	return (
		<button className="likeButton"
				id={ id }
				onClick={ clickHandler }><img src={ heart } alt="like" className="likeButtonImage"/></button>
	);
};

export default Like;
