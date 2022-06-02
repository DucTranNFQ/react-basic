import clsx from 'clsx';
import React from 'react';
import styles from './Input.module.scss';

export default function Input(props) {
  const classes = clsx(
    props.className,
    {
      [styles.disabled]: props.disabled,
    }
  )

  return (
    <input {...props} className={classes}/>
  )
}
