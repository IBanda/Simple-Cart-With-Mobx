import React, { useState, useContext } from "react";
import Menu from "../../components/Navigation/Menu";
import { products } from "../../products";
import Product from "../../components/Product/Product";
import CartModal from "../../components/CartModal/CartModal";
import ShoppingCartPage from "../ShoppingCartPage";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MobxStore } from "../../index";
import { observer } from "mobx-react-lite";

function Shop() {
  const { modalState, setModal } = useContext(MobxStore);
  const [productDetails, setProductDetails] = useState({});

  function showModal(e, details) {
    e.preventDefault();
    setModal();
    setProductDetails(details);
  }

  return (
    <Router>
      <div className="navWrapper">
        <Menu />
      </div>
      <Route path="/cart" component={ShoppingCartPage} />
      <Route path="/" exact>
        <div className="productSection container">
          <div className="row">
            {products.map(item => (
              <Product {...item} showModal={showModal} key={item.sku} />
            ))}
          </div>
        </div>
      </Route>
      {modalState && <CartModal {...productDetails} />}
    </Router>
  );
}

Shop.propTypes = {
  modalStatus: PropTypes.bool,
  openOrClose: PropTypes.func
};

export default observer(Shop);
