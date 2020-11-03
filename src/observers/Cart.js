import React, { useContext } from "react";
import CartDropdown from "./CartDropdown";
import PropTypes from "prop-types";
import { MobxStore } from "../index";
import { observer } from "mobx-react-lite";
function Cart() {
  let { count } = useContext(MobxStore);
  return (
    <div>
      <div className="cartWrapper">
        <img className="cart" src="images/cart.svg" alt="" />
        {count === 0 ? null : (
          <div className="cartCounter">
            <p>{count}</p>
          </div>
        )}
        <div className="cartDropdown">
          <CartDropdown />
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array
};

export default observer(Cart);
