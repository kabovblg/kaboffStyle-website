import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
  //   dispatch(detailsUser(userInfo._id));
  // }, [dispatch, userInfo._id]);
  if (!user) {
    dispatch({ type: USER_UPDATE_PROFILE_RESET });
    dispatch(detailsUser(userInfo._id));
  } else {
    setName(user.name);
    setEmail(user.email);
  }
}, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Паролите не съвпадат');
    } else {
      dispatch(updateUserProfile({ userId: user._id, name, email, password }));
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Потребителски профил</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
           {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Профилът е обновен успешно.
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Име</label>
              <input
                id="name"
                type="text"
                placeholder="Въведете име"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Е-майл</label>
              <input
                id="email"
                type="email"
                placeholder="Въведете е-майл"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Парола</label>
              <input
                id="password"
                type="password"
                placeholder="Въведете парола"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">Потвърждаване на паролата</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Потвърдете паролата"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Обнови
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}