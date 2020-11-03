import React, { useContext, useEffect, useState } from "react";
import { MobxStore } from "../index";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
function ProductDetail({ item }) {
  const { updateCart, removeItem } = useContext(MobxStore);
  const [productQuantity, setProductQuantity] = useState(1);
  useEffect(() => {
    setProductQuantity(item.productQuantity);
  }, [item]);

  function handleChange(e, sku) {
    e.preventDefault();
    setProductQuantity(parseInt(e.target.value));
    updateCart(sku, parseInt(e.target.value));
  }
  function removeItemFromCart(sku) {
    removeItem(sku);
  }

  return (
    <>
      <tr>
        <td className="productCol">
          <button onClick={() => removeItemFromCart(item.sku)}>x</button>
          <img className="shoppingCartImg" src={item.src} alt={item.name} />
          {item.name}
        </td>
        <td>{item.price}</td>
        <td>
          <input
            className="quantityInput"
            type="number"
            value={productQuantity}
            onChange={e => handleChange(e, item.sku)}
          />
        </td>
        <td>
          $
          {parseFloat(item.price.replace("$", "").trim()) *
            parseFloat(item.productQuantity)}
        </td>
      </tr>
    </>
  );
}

ProductDetail.propTypes = {
  item: PropTypes.object,
  updateQuantity: PropTypes.func
};

export default observer(ProductDetail);
