import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

export default function Button({children, primary, disabled, loading, onClick, className, ...props}) {
    const classes = clsx(styles.btn,
        {
            [styles.primary]: primary,
            [styles.disabled]: disabled,
            [styles.loading]: loading,
        }, className
    )

  return (
    <button {...props} className={classes} onClick={onClick}>{children} {loading && <div className="ldsEllipsis"><div></div><div></div><div></div><div></div></div> }</button>
  )
}
