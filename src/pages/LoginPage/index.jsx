import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useFormik } from 'formik';

import styles from './styles.module.scss';
import { Input, Button } from '../../components';

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
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
      <Button primary loading className="mb-3" type="submit">Login</Button>
      <div className={styles.text}>Already Have An Account? <Link className={styles.link} to="/signup">Signup</Link></div>
    </form>
  )
}

const validate = (values) => {
  const errors = {};
    if(!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if(!values.password) {
      errors.password = "Required";
    }

    if(!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.password && values.password !== values.confirmPassword) {
      errors.confirmPassword = "passwords do not match";
    }

  return errors;
}
