import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useFormik } from 'formik';

import styles from './styles.module.scss';
import { Input, Button } from '../../components';

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      await new Promise((r) => setTimeout(r, 1000));
      console.log(JSON.stringify(values, null, 2));
      setIsSubmitting(false);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={clsx(styles.header, "px-4")}>
        <h1 className={styles.title}>Create An Account</h1>
        <p className={styles.text}>Create an account to enjoy all the services without any ads for free!</p>
      </div>
      <Input type="text" placeholder="Email Address" className={styles.input} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.email ? formik.errors.email : null}
      </div>
      <Input type="password" placeholder="password" className={styles.input} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.password ? formik.errors.password : null}
      </div>
      <Input type="password" placeholder="confirm password" className={styles.input} value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="confirmPassword"/>
      <div className={clsx("w-100", "mb-3", styles.error)}>
        {formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
      </div>
      <Button primary disabled={isSubmitting} className="mb-3" type="submit">Create Account</Button>
      {isSubmitting && <div class="ldsEllipsis"><div></div><div></div><div></div><div></div></div>}
      <div className={styles.text}>Already Have An Account? <Link className={styles.link} to="/login">Login</Link></div>
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
