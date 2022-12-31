import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import { setWindowClass } from '../../utils/helpers';

const Login = () => {

  const login = (email: string, password: string) => {
    console.log({email: email, password: password})
    //? Your request goes herer
  }
  const {handleChange, values, handleSubmit, touched, errors} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required')
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    }
  });

  setWindowClass('hold-transition login-page');
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a><b>APP NAME</b></a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group input-group mb-3">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                </div>
              </div>
              </div>
              <div className="input-group mb-3">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                </div>
              </div>
                  </div>
                  <div className="social-auth-links text-center mb-3">
                  <button type="submit" className="btn btn-block btn-danger">Login</button>
                    </div>
                  <div className="text-center"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;