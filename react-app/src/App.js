import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import ProfilePage from './components/ProfilePage';
import User from './components/User';
import { authenticate } from './store/session';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import { ReactComponent as SadFace } from "../src/svgImg/sadFace.svg";
import { getAllPosts } from './store/post';
import PostPage from './components/PostPage';
import Footer from './components/Footer';
import { getAllLikes } from './store/like';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    (async () => {
      // dispatch(getAllLikes())
      // dispatch(getAllPosts())
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          {user && <Redirect to='/home' />}
          {!user && <Redirect to='/login' />}
        </Route>
         <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar />
          <ProfilePage />
          {/* <User /> */}
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <NavBar />
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/posts/:postId' exact={true} >
          <NavBar />
          <PostPage />
        </ProtectedRoute>
        <Route>
          <div className=" landing-wrapper">
            <div className="pageNotFoundContainer">
              <h1 className="pageNotFound">PAGE NOT FOUND</h1>
              <SadFace className="sad-face" />
              <a href="/home">
                <button className="landing-button">Go Back</button>
              </a>
            </div>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
