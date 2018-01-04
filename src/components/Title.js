import React from 'react';
import styles from './Title.css';

const Title = props => <h1 className={styles.title}>React to do list (Todo's:{props.todos})</h1>;

export default Title;
