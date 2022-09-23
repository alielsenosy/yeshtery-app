import React from "react";
import "./NavBody.scss";
import Cart from "./Cart";

const NavBody = (props) => {
  return (
    <div className="navBody">
      <div className="bodyNav d-flex flex-row justify-content-between">
        <div>
          <span>Men</span> / <span>Clothing</span> / <span>Topics</span> /{" "}
          <span>Adidas</span>
        </div>
        <div>
          <Cart cartItems={props.cartItems} quantity={props.quantity} />
        </div>
      </div>
    </div>
  );
};

export default NavBody;
