import clsx from 'clsx';
import React from 'react';
import styles from './Input.module.scss';

export default function Input(props) {
  const classes = clsx(
    props.className,
    {
      [styles.disabled]: true,
    }
  )
  console.log(props)

  return (
    <input {...props} className={classes}/>
  )
}
