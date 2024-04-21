import React from "react";

const Home = () => {
  return (
    <div classname="container mt-5">
      <div classname="row">
        <div classname="col-md-6 offset-md-3">
          <div classname="card">
            <div classname="card-body">
              <h5 classname="card-title">Personal Information</h5>
              <ul classname="list-group list-group-flush">
                <li classname="list-group-item">
                  <strong>First Name:</strong>
                  <span id="firstName">John</span>
                </li>
                <li classname="list-group-item">
                  <strong>Last Name:</strong>
                  <span id="lastName">Doe</span>
                </li>
                <li classname="list-group-item">
                  <strong>Phone Number:</strong>
                  <span id="phoneNumber">123-456-7890</span>
                </li>
                <li classname="list-group-item">
                  <strong>Address:</strong>
                  <span id="address">123 Main St, City, State</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
