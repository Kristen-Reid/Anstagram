import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import '../auth/login.css';

const LoginForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(usernameEmail, password));
    if (data) {
      setErrors(data);
    }
  };

if (user) {
  history.push('/home')
}

  const demoLogin = async (e) => {
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }
  };

  const updateUsernameEmail = (e) => {
    setUsernameEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className='login-form-container'>
      <div className='login-form-box'>
        <div className='logo-container'>
          <div className='logo'>
            <p className='logo-name'>Anstagram</p>
          </div>
        </div>
        <form onSubmit={onLogin}>
          <div className='errors-container'>
            {errors.map((error, ind) => (
              <div className='error' key={ind}>{error}</div>
            ))}
          </div>
          <div className='form-input-box'>
            <input
              className='form-input'
              name='username_email'
              type='text'
              placeholder='Username or Email'
              value={usernameEmail}
              onChange={updateUsernameEmail}
            />
          </div>
          <div className='form-input-box'>
            <input
              className='form-input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div>
            <button className='login-btn' type='submit'>Login</button>
          </div>
        </form>
        <div className='or-line-container'>
          <div className='or-line'></div>
          <div className='or'>OR</div>
          <div className='or-line'></div>
        </div>
        <div className='demo-container'>
          <a
          className="demo-btn"
            onClick={demoLogin}
          >
            Demo Login
          </a>
        </div>
      </div>
      <div className='form-bottom-box'>
        <p className='account-question'>Don't have an account? <a href='/sign-up'>Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
