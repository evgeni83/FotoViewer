import React from 'react';


import './MainPage.css';
import Preloader from '../Preloader/Preloader';
import MainPage from './MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotosList } from '../../store/asyncActions/fetchFotosList';


const MainPageContainer = () => {
	const dispatch = useDispatch();
	const bearer_token = useSelector( state => state?.auth.bearer_token );
	const is_fetching = useSelector( state => state?.photos.is_fetching );
	const list = useSelector( state => state?.photos.list );

	React.useEffect( () => {
		if ( list?.length > 0 ) return;
		dispatch( fetchPhotosList( bearer_token ) );
	} );

	// componentDidMount() {
	// 	this.props.getPhotos(
	// 		this.props.pagesCounter,
	// 		this.props.photosPerPage,
	// 		this.props.list,
	// 		this.props.previewPhoto,
	// 	);
	//
	// 	if ( this.props.previewPhoto.urls ) {
	// 		const elem = document.querySelector( `img[src="${ this.props.previewPhoto.urls.regular }"]` );
	// 		elem.scrollIntoView();
	// 	}
	//
	// 	window.addEventListener( 'scroll', this.loadMorePhotos );
	// }
	//
	// componentWillUnmount() {
	// 	window.removeEventListener( 'scroll', this.loadMorePhotos );
	// }

	// loadMorePhotos = async () => {
	// 	let documentHeight = Math.max(
	// 		document.body.scrollHeight,
	// 		document.documentElement.scrollHeight,
	// 		document.body.offsetHeight,
	// 		document.documentElement.offsetHeight,
	// 		document.body.clientHeight,
	// 		document.documentElement.clientHeight,
	// 	);
	// 	let viewportHeight = window.innerHeight;
	// 	let scrollTopPosition = window.pageYOffset;
	// 	let scrollBottomPosition = viewportHeight + scrollTopPosition;
	// 	let distanceToBottomOfTheDocument = documentHeight - scrollBottomPosition;
	// 	const distanceToLoad = 250;
	//
	// 	if ( distanceToBottomOfTheDocument > distanceToLoad ) {
	// 		this.setState( {
	// 			isLoadPossible: true,
	// 		} );
	// 	}
	//
	// 	if ( distanceToBottomOfTheDocument < distanceToLoad ) {
	// 		if ( this.state.isLoadPossible ) {
	// 			await this.props.incrementPagesCounter();
	// 			this.props.getPhotos(
	// 				this.props.pagesCounter,
	// 				this.props.photosPerPage,
	// 				this.props.list,
	// 				this.props.previewPhoto,
	// 			);
	// 			this.setState( {
	// 				isLoadPossible: false,
	// 			} );
	// 		}
	// 	}
	// };

	if ( is_fetching ) return <Preloader/>;

	return list.length > 0 ? <MainPage list={ list }/> : <h1>No photos</h1>;


};

export default MainPageContainer;
