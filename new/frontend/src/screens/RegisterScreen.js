import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert('Паролите не съвпадат!');
    } 
    else if(!password.match ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})' )){
      alert('Паролата трябва да съдържа поне 8 символа, малка, голяма буква, специален символ и цифра!');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Създай акаунт</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Име:</label>
          <input
            type="text"
            id="name"
            placeholder="Въведете име"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Е-майл адрес:</label>
          <input
            type="email"
            id="email"
            placeholder="Въведете е-майл:"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Парола:</label>
          <input
            type="password"
            id="password"
            placeholder="Въведете парола"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Потвърждаване на парола:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Потвърдете паролата"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Регистрирай се
          </button>
        </div>
        <div>
          <label />
          <div>
          Вече имаш акаунт?{' '}	
            <Link to={`/signin?redirect=${redirect}`}>Вход</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
