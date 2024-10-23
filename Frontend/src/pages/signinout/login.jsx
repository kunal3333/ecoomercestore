import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    alert('Logging in...');
  };

 

  const [signupdata,setSignupdata] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  });


  let handleSignupChange = async (e)=>{
    console.log(signupdata)
    const {name,value} = e.target
    setSignupdata(prev =>({
      ...prev,[name]:value
    }))
  }
  const handleSignup =async (event) => {
    event.preventDefault();
    let res=await axios.post(
      'http://localhost:5000/register',       
      signupdata
    )
  console.log(res)
  };

  
  return (
    <div className="wrapper">
      <div className="title-text text-center mb-3">
        <h2 id="form-title">{isLogin ? 'Login' : 'Signup'}</h2>
      </div>
      <div className="form-container">
        <div className="slide-controls d-flex">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={() => setIsLogin(true)}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={() => setIsLogin(false)}
          />
          <label
            htmlFor="login"
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {isLogin ? (
            <form id="login-form" className="login" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group text-right">
                <a href="#">Forgot password?</a>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
              <div className="text-center">
                Not a member?{' '}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form id="signup-form" className="signup" onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  value={signupdata.firstname}
                  onChange={handleSignupChange}
                  className="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  value={signupdata.lastname}
                  onChange={handleSignupChange}
                  className="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={signupdata.email}
                  onChange={handleSignupChange}
                  className="form-control"
                  placeholder="Email : name@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={signupdata.password}
                  onChange={handleSignupChange}
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              {/* <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  required
                />
              </div> */}
              <div className="form-group">
                <button type="submit" className="btn btn-success btn-block">
                  Signup
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
