import React from 'react';
import styles from './likesAmount.module.scss';

const LikesAmount = ( { likes } ) => (
	<div className={ styles.likes }>{ likes } likes</div>
);

export default LikesAmount;
