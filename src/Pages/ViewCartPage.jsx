import React from "react";
import UC from "../assets/UC.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Pages/ViewCartPage.css";
import mini from "../assets/mini.png";
import mirror from "../assets/mirror.png";

export default function ViewCardPage() {
  return (
    <div className="container-fluid p-0">

      {/* Top Card */}
      <div className="uc-card">
        <div className="row m-0">
          <div className="col-6 d-flex uc-left">
            <img src={UC} alt="Urban Logo" className="uc-logo" />
            <h1 className="check ms-3 fs-5 mt-2">Checkout</h1>
          </div>
          <div className="col-6 uc-right"></div>
        </div>
      </div>

      {/* CONTENT BELOW */}
      <div className="container mt-5">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-md-6">
            <h1 className="saving fw-bold">Saving ₹300 on this order</h1>

            <div className="account-box p-4 shadow-sm rounded mt-5">
              <h5 className="fw-bold">Account</h5>
              <p className="text-muted">To book the service, please login or sign up</p>

              <button className="w-100 py-2 login-btn">
                Login
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">

            <div className="card p-4 shadow-sm mb-4 rounded">
              <h6 className="fw-bold">Frequently added together</h6>

              <div className="d-flex gap-3 mt-3">

                {/* SMALL CARD 1 */}
                <div
                  className="small-card shadow-sm rounded p-3 d-flex justify-content-between align-items-center"
                  style={{ width: "48%" }}
                >
                  <div>
                    <p className="mb-1"> washbasin cleaning</p>
                    <p className="fw-bold">₹69</p>
                    <button className=" btn-outline-primary btn-sm button2">Add</button>
                  </div>

                  <img src={mini} alt="Service" className="service-img" />
                </div>

                {/* SMALL CARD 2 */}
                <div
                  className="small-card shadow-sm rounded p-3 d-flex justify-content-between align-items-center"
                  style={{ width: "48%" }}
                >
                  <div>
                    <p className="mb-1">Mirror Cleaning</p>
                    <p className="fw-bold">₹59</p>
                    <button className=" btn-outline-primary btn-sm button2">Add</button>
                  </div>

                  <img src={mirror} alt="Mirror" className="service-img" />
                </div>

              </div>
            </div>

            {/* AMOUNT BOX */}
            <div className="card p-4 shadow-sm rounded">
              <h6 className="fw-bold">Amount to pay</h6>
              <p className="fw-bold fs-4">₹1,426</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
