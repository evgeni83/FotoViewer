import React from 'react';
import styles from './mainPage.module.scss';
import Preloader from '../Preloader/Preloader';
import PhotosGrid from './PhotosGrid/PhotosGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotosList } from '../../store/actions/fetchPhotosListAction';
import { setCurrentPageActionCreator } from '../../store/actions/setCurrentPageAction';
import { setIsFetchingActionCreator } from '../../store/actions/setIsFetchingAction';

const MainPage = () => {
	const dispatch = useDispatch();
	const { is_fetching, list, current_page, per_page, order_by } = useSelector( state => state?.photos );

	const upLoadPhotosOnScroll = event => {
		const scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight,
		);
		const scrolledViewportBottom = window.pageYOffset + event.target.documentElement.clientHeight;

		if ( scrollHeight - scrolledViewportBottom < 200 ) {
			if ( is_fetching ) {
				return;
			}
			dispatch( setIsFetchingActionCreator( true ) );
			dispatch( setCurrentPageActionCreator( current_page + 1 ) );
		}
	};

	React.useEffect( () => {
		if ( list.length === current_page * per_page ) return;
		dispatch( setIsFetchingActionCreator( true ) );
		dispatch( fetchPhotosList( { page: current_page, perPage: per_page, orderBy: order_by } ) );
	}, [ dispatch, list, current_page, per_page, order_by ] );

	React.useEffect( () => {
		window.addEventListener( 'scroll', upLoadPhotosOnScroll );

		return () => {
			window.removeEventListener( 'scroll', upLoadPhotosOnScroll );
		};
	} );


	if ( list.length === 0 ) {
		if ( is_fetching ) {
			return <Preloader/>;
		}
		return <h1 className={ styles.title }>No photos</h1>;
	}

	return (
		<main className={ styles.wrapper }>
			<h1 className={ styles.title }>Photo Viewer</h1>
			<PhotosGrid list={ list }/>
		</main>
	);
};

export default MainPage;
