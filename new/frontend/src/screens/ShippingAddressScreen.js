import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/ChekoutSteps";

export default function ShippingAddressScreen(props) {
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const cart = useSelector(state => state.cart);
  const {shippingAddress} = cart;
  const { userInfo } = userSignin;
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
  }, [navigate, userInfo]);

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    navigate("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Данни за доставка</h1>
        </div>
        <div>
          <label htmlFor="fullName">Пълно име:</label>
          <input
            type="text"
            id="fullName"
            placeholder="Въведете пълно име"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Адрес:</label>
          <input
            type="text"
            id="address"
            placeholder="Въведете адрес"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Населено място:</label>
          <input
            type="text"
            id="city"
            placeholder="Въведете населено място"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Пощенски код:</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Въведете пощенски код"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Държава:</label>
          <input
            type="text"
            id="country"
            placeholder="Въведете държава"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Следваща стъпка
          </button>
        </div>
      </form>
    </div>
  );
}
