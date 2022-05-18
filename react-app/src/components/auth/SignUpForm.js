import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { login, signUp } from '../../store/session';
import '../auth/signup.css'

const SignUpForm = () => {
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(fullName, username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const demoLogin = async (e) => {
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    history.push('/home');
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFullName = (e) => {
    setFullName(e.target.value);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };


  return (
    <div className='signup-form-container'>
      <div className='signup-form-box'>
        <div className='logo-container'>
          <div className='logo'>
            <p className='logo-name'>Anstagram</p>
          </div>
          <div className='signup-message'>
            Sign up to see photos and videos from your friends.
          </div>
        </div>
        <div className='demo-container'>
          <button
          className="demo-signup"
            onClick={demoLogin}
          >
            Demo Login
          </button>
        </div>
        <div className='or-line-container'>
          <div className='or-line'></div>
          <div className='or'>OR</div>
          <div className='or-line'></div>
        </div>
          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className='form-input-box'>
              <input
                className='form-input'
                type='text'
                name='fullName'
                placeholder='Full Name'
                onChange={updateFullName}
                value={fullName}
              ></input>
            </div>
            <div className='form-input-box'>
              <input
                className='form-input'
                type='text'
                placeholder='Username'
                name='username'
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div className='form-input-box'>
              <input
                className='form-input'
                type='text'
                placeholder='Email'
                name='email'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div className='form-input-box'>
              <input
                className='form-input'
                type='password'
                placeholder='Password'
                name='password'
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div className='form-input-box'>
              <input
                className='form-input'
                type='password'
                placeholder='Repeat Password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <div className='btn-container'>
              <button className='form-btn' type='submit'>Sign Up</button>
            </div>
          </form>
      </div>
      <div className='form-bottom-box'>
        <p className='account-question'>Have an account? <a href='/login'>Log in</a></p>
      </div>
    </div>
  );
};

export default SignUpForm;
