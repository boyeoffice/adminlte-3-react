import React from 'react';

import { setWindowClass } from '../../utils/helpers';

import InputGroup from '../../components/input-group/InputGroup';

const Login = () => {
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
              <form>
                <InputGroup />
                        <div className="input-group mb-3">
                          <input type="password" className="form-control" placeholder="Password" />
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