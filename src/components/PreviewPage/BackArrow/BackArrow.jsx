import React from 'react';
import backArrow from './icons8-back-arrow-100.png';
import { Link } from 'react-router-dom';
import styles from './backArrow.module.scss';

const BackArrow = () => (
	<Link to="/" className={ styles.link }>
		<img src={ backArrow } alt="BACK"/>
	</Link>
);

export default BackArrow;
