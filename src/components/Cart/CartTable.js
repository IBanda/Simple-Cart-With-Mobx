import React from "react";
import PropTypes from "prop-types";
import ProductDetail from "../../observers/ProductDetail";
export default function CartTable({ cart }) {
  return (
    <>
      <table className="shoppingCartTable">
        <thead>
          <tr>
            <th className="product">product</th>
            <th>price</th>
            <th>quantity</th>
            <th>subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <ProductDetail key={item.sku} item={item} />
          ))}
          <tr className="noBorder">
            <td className="couponRow" colSpan={6}>
              <form action="">
                <div>
                  <input type="text" />
                  <button className="couponBtn">apply coupon</button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

CartTable.propTypes = {
  cart: PropTypes.array,
  handleChange: PropTypes.func
};
