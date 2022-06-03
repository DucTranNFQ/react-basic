import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {message} from 'antd';

import styles from '../auth.module.scss';
import { Input, Button } from '../../../components';
import { GlobalDataContext } from '../../../contexts/GlobalProvider';
import {userAPI} from '../../../api/userAPI';

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const globalData = useContext(GlobalDataContext);
  const navigate = useNavigate();

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

      const response = await userAPI.login(values);

      if(response.status === 401) {
        message.warning("email or password was wrong")
      } else if (response.status === 200) {
        message.success("Login successfully")
        localStorage.setItem('token', response.token)
        const userData = await userAPI.fetchUserData(response.token);
        globalData.setField('userData', userData)
        navigate('/')
      }


      setIsSubmitting(false)
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={clsx(styles.header, "px-4")}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.text}>Login to enjoy all the services without any ads for free!</p>
      </div>
      <Input disabled={isSubmitting} type="text" placeholder="Email Address" className={styles.input} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.email ? formik.errors.email : null}
      </div>
      <Input disabled={isSubmitting} type="password" placeholder="password" className={styles.input} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.password ? formik.errors.password : null}
      </div>
      <Button primary loading={isSubmitting} className="mb-3" type="submit">Login</Button>
      <div className={styles.text}>Already Have An Account? <Link className={styles.link} to="/signup">Signup</Link></div>
    </form>
  )
}
