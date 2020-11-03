import React from "react";
import PropTypes from "prop-types";
export default function CartTotals({ subTotal, shipping }) {
  return (
    <>
      <table className="cartTotals">
        <thead>
          <tr>
            <th>cart totals</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>subtotal</td>
            <td>${subTotal}</td>
          </tr>
          <tr className="shippingRow">
            <td>shipping</td>
            <td>
              <span>Flat rate:</span> ${shipping}
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>${subTotal + shipping}</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <button>proceed to checkout</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

CartTotals.propTypes = {
  subTotal: PropTypes.number,
  shipping: PropTypes.number
};
