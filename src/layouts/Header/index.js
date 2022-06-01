import React from 'react'
import styles from "./Header.module.scss"
import Button from "../../components/Button"

export default function Header() {
  console.log(styles)
  return (
    <div className=''>
      <h1 className={styles.heading}>Header</h1>
      <Button active>Button</Button>
    </div>
  )
}
