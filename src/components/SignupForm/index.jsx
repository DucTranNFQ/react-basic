import React from 'react'
import clsx from 'clsx';

import Button from '../Button'
import Input from '../Input';

export default function SignupForm({ styles }) {
    console.log(styles)
  return (
    <form className={styles.form}>
      <div className={clsx(styles.header, "mb-5", "px-3")}>
        <h1 className={styles.title}>Create An Account</h1>
        <p className={styles.text}>Create an account to enjoy all the services without any ads for free!</p>
      </div>
      <Input type="text" placeholder="Email Address" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
      <div className="w-100 mb-3">
        <span>required</span>
      </div>
      <Input type="text" placeholder="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="w-100 mb-3">
        <span>required</span>
      </div>
      <Input type="text" placeholder="password confirm" className={styles.input} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
      <div className="w-100 mb-3">
        <span>required</span>
      </div>
      <Button primary className="mb-3" onClick={handleSubmit}>Create Account</Button>
      <div className={styles.text}>Already Have An Account? <a className={styles.link}>Sign In</a></div>
    </form>
  )
}
