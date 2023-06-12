import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/productActions";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const params = useParams();
  const { id: productId } = params;
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
  navigate(`/cart/${productId}?qty=${qty}`);
  }

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Назад</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Цена: BGN {product.price}</li>
                <li>
                  Описание:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Цена</div>
                      <div className="price">BGN {product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Статус</div>
                      <div>
                        {product.countInStack > 0 ? (
                          <span className="success">Наличен</span>
                        ) : (
                          <span className="danger">Изчерпан</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStack > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Количество</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStack).keys()].map(
                                (x) => (
                                  <option key={x+1} value={x + 1}>{x + 1}</option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button className="primary block" onClick={addToCartHandler}>
                          Добави към кошницата
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
