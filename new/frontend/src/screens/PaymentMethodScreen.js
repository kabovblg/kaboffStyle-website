import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/ChekoutSteps";

export default function PaymentMethodScreen(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/signin/shipping');
    }
  }, [navigate, shippingAddress]);
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Начин на плащане</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        {/* <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div> */}
        <div>
          <button className="primary" type="submit">
            Продължи
          </button>
        </div>
      </form>
    </div>
  );
}