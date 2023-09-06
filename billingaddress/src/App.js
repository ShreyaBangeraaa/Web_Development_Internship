import React, { Component } from 'react';
import './App.css'; // Make sure to create an appropriate CSS file
import BillingAddress from './BillingAddress';
import PaymentSection from './PaymentSection';
import CartSection from './CartSection';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './Output';

class App extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-lg-8">
          <div className="container">
            <form>
              <BillingAddress />
              <hr />
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Shipping address same as billing address
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck2"
                />
                <label className="custom-control-label" htmlFor="customCheck2">
                  Save this information for next time
                </label>
              </div>
              <PaymentSection />
              {/* <div className="form-group row">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">Continue to checkout</button>
                </div>
              </div> */}
              <Button title="Continue to checkout"/>
            </form>
          </div>
        </div>
        <CartSection />
      
        </div>
        <Gallery/>
        </div>
    );
  }
}

export default App;



