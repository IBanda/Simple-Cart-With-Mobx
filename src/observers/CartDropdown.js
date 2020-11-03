import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MobxStore } from "../index";
import { observer } from "mobx-react-lite";
function CartDropdown() {
  const { cart, removeItem } = useContext(MobxStore);
  function removeItemFromCart(sku) {
    removeItem(sku);
  }

  return (
    <>
      {cart.length === 0 ? (
        <div className="emptyCart">
          <img src="images/cart.svg" alt="cart" />
          <p>no products in the cart</p>
        </div>
      ) : (
        <div>
          <ul className="filledCart">
            {cart.map((item, i) => (
              <li key={i} className="topCartContainer">
                <img src={item.src} alt="" />
                <div className="productDetail">
                  <p>{item.name}</p>
                  {item.productQuantity}
                  <span>x</span>
                  <strong>{item.price}</strong>
                </div>
                <button
                  className="itemRemove"
                  onClick={() => removeItemFromCart(item.sku)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
          <div className="bottomCartContainer">
            <div className="subtotal"></div>
            <Link to="/cart" className="viewCartBtn">
              view cart
            </Link>
            <button className="checkoutBtn">checkout</button>
          </div>
        </div>
      )}
    </>
  );
}

CartDropdown.propTypes = {
  cart: PropTypes.array,
  removeFromCart: PropTypes.func
};

export default observer(CartDropdown);
