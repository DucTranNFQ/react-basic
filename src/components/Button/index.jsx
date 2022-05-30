import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

export default function Button({children, primary, disabled, onClick, className}) {
    const classes = clsx(styles.btn,
        {
            [styles.primary]: primary,
            [styles.disabled]: disabled,
            
        }, className
    )

  return (
    <div className={classes} onClick={onClick}>{children}</div>
  )
}
