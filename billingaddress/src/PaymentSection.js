import React from 'react';

const PaymentSection = () => {
  return (
    <div>
      <hr />
      <label>
        <h3>Payment</h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="creditCard"
            value="creditCard"
            checked
          />
          <label className="form-check-label" htmlFor="creditCard">
            Credit card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="debitCard"
            value="debitCard"
          />
          <label className="form-check-label" htmlFor="debitCard">
            Debit card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="paypal"
            value="paypal"
          />
          <label className="form-check-label" htmlFor="paypal">
            Paypal
          </label>
        </div>
      </label>
      <div className="row">
        <div className="col-lg-6">
          <label htmlFor="cardName">Name on Card</label>
          <input
            type="text"
            className="form-control"
            id="cardName"
            placeholder="John Doe"
          />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="expYear">Expiration</label>
              <input
                type="text"
                className="form-control"
                id="expYear"
                placeholder="MM/YY"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <label htmlFor="ccNumber">Credit card number</label>
          <input
            type="text"
            className="form-control"
            id="ccNumber"
            placeholder="1234 5678 9012 3456"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
