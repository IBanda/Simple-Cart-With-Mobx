import React, { useContext } from "react";
import propTypes from "prop-types";
import CartTotals from "../components/Cart/CartTotals";
import CartTable from "../components/Cart/CartTable";
import { MobxStore } from "../index";
import { observer } from "mobx-react-lite";
function ShoppingCartPage() {
  const { cart } = useContext(MobxStore);
  let subTotal = cart.reduce((prev, current) => {
    let price =
      parseFloat(current.price.replace("$", "").trim()).toFixed(2) *
      current.productQuantity;
    return prev + price;
  }, 0);
  let shipping = 5;

  return (
    <div className="container shoppingCart">
      <div className="row">
        <div className="col-lg-12">
          <h1>shopping cart</h1>
        </div>
        <div className="col-lg-8 leftCartContainer">
          <CartTable cart={cart} />
        </div>
        <div className="col-lg-4 cartTotalsWrapper">
          <CartTotals shipping={shipping} subTotal={subTotal} />
        </div>
      </div>
    </div>
  );
}

ShoppingCartPage.propTypes = {
  cart: propTypes.array,
  productCount: propTypes.func
};
export default observer(ShoppingCartPage);
