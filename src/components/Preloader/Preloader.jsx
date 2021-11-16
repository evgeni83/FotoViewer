import React from 'react';
import preloader from './5-1.svg';
import styles from './preloader.module.scss';

const Preloader = () => (
	<div className={ styles.wrapper }>
		<img src={ preloader } alt="loading..."/>
	</div>
);

export default Preloader;
