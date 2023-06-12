import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createdOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/ChekoutSteps";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

export default function PlaceOrderScreen(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    navigate("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); 
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  const dispatch = useDispatch();
  // 15% фиксирана такса например
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const placeOrderHandler = () => {
    dispatch(createdOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, navigate, success]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Детайли за доставка</h2>
                <p>
                  <strong>Име: </strong> {cart.shippingAddress.fullName} <br />
                  <strong>Адрес: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Плащане</h2>
                <p>
                  <strong>Начин на плащане:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Артикули:</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x BGN {item.price.toFixed(2)} = BGN{" "}
                          {item.qty * item.price.toFixed(2)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Детайли:</h2>
              </li>
              <li>
                <div className="row">
                  <div>Артикули</div>
                  <div>BGN {cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Доставка</div>
                  <div>BGN {cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Такси</div>
                  <div>BGN {cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Сума за плащане</strong>
                  </div>
                  <div>
                    <strong>BGN {cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Поръчай
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
