import React from 'react';

const BillingAddress = () => {
  return (

    <div className="col-lg-10">
      <h3>Billing Address</h3>
      <div className="row">
        <div className="col-lg-6">
          <label htmlFor="fname">
            <i className="fa fa-user"></i> First Name
          </label>
          <input type="text" className="form-control" id="fname" placeholder="First name"/>
        </div>
        <div className="col-lg-6">
          <label htmlFor="lname">
            <i className="fa fa-user"></i> Last Name
          </label>
          <input type="text" className="form-control" id="lname" placeholder="Last name"/>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="username">
          <i className="fa fa-user"></i> Username
        </label>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input type="text" className="form-control"placeholder="Username"aria-label="Username"aria-describedby="addon-wrapping"/>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress2">
          Address 2<small className="text-muted">(Optional)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment or suite"
        />
      </div>
      <div className="row">
        <div className=" col-md-5 mb-3 col-sm-12">
          <label htmlFor="inputCountry">Country</label>
          <select id="inputCountry" className="form-control">
            <option selected>Choose...</option>
          </select>
        </div>
        <div className="col-md-4 mb-3 col-sm-12 ">
          <label htmlFor="inputState">State</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
          </select>
        </div>
        <div className="col-md-3 mb-3 col-sm-10">
          <label htmlFor="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;

