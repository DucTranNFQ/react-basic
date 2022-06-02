import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from '../auth.module.scss';
import { Input, Button } from '../../../components';

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('*Please enter an email'),
      password: Yup.string()
        .min(3, 'Password should be 3 chars minimum.')
        .required('*Please enter a password')
    }),
    onSubmit: async values => {
      setIsSubmitting(true)
      await new Promise((r) => setTimeout(r, 1000));
      

      setIsSubmitting(false)
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={clsx(styles.header, "px-4")}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.text}>Login to enjoy all the services without any ads for free!</p>
      </div>
      <Input type="text" placeholder="Email Address" className={styles.input} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.email ? formik.errors.email : null}
      </div>
      <Input type="password" placeholder="password" className={styles.input} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.password ? formik.errors.password : null}
      </div>
      <Button primary loading={isSubmitting} className="mb-3" type="submit">Login</Button>
      <div className={styles.text}>Already Have An Account? <Link className={styles.link} to="/auth/signup">Signup</Link></div>
    </form>
  )
}
