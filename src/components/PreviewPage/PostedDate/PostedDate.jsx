import React from 'react';
import styles from './postedDate.module.scss';

const PostedDate = ( { date } ) => (
	<div className={ styles.date }>Photo posted at { date }</div>
);

export default PostedDate;
