//import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import { signout } from "./actions/userActions";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
// import {PayPalScriptProvider} from "@paypal/react-paypal-js";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Kaboff Style
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Кошница
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Профил</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">История на поръчките</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Изход
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Вход</Link>
            )}
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route
              path="/signin/shipping"
              element={<ShippingAddressScreen />}
            ></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileScreen />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
          </Routes>
        </main>
        <footer className="row center">Всички права запазени.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
