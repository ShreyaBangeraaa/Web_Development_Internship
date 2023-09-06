import React from 'react';
import styles from './Button.module.css'
const CartSection = () => {
  return (
    <div className="col-md-4 order-md-2 col-sm-12">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">&nbsp;&nbsp;Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Product name</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$12</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span class="text-success">-$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
        {/* Add more cart items here */}
      </ul>
      <form className="card p-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Promo code"/>
          <div className="input-group-append">
            <button type="submit" className={`${styles.btn2} ${styles.btnhover} `}>Redeem</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartSection;
