import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';

import styles from '../auth.module.scss';
import { Input, Button } from '../../../components';
import { GlobalDataContext } from '../../../contexts/GlobalProvider';

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const globalData = useContext(GlobalDataContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('*Please enter an email'),
      password: Yup.string()
        .min(3, 'Password should be 3 chars minimum.')
        .required('*Please enter a password'),
      confirmPassword: Yup.string()
        .min(3, 'Password should be 3 chars minimum.')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('*Please enter a password'),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      await new Promise((r) => setTimeout(r, 1000));
      message.success('signup successfully!')
      globalData.setField("user", JSON.stringify(values))
      setIsSubmitting(false);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={clsx(styles.header, "px-4")}>
        <h1 className={styles.title}>Create An Account</h1>
        <p className={styles.text}>Create an account to enjoy all the services without any ads for free!</p>
      </div>
      <Input disabled={isSubmitting} type="text" placeholder="Email Address" className={styles.input} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.email ? formik.errors.email : null}
      </div>
      <Input disabled={isSubmitting} type="password" placeholder="password" className={styles.input} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.password ? formik.errors.password : null}
      </div>
      <Input disabled={isSubmitting} type="password" placeholder="confirm password" className={styles.input} value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="confirmPassword"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
      </div>
      <Button primary loading={isSubmitting} className="mb-3" type="submit">Create Account</Button>
      <div className={styles.text}>Already Have An Account? <Link className={styles.link} to="/login">Login</Link></div>
    </form>
  )
}
