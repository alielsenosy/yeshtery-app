import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const Cart = (props) => {
  return (
    <div>
      <Badge badgeContent={props.cartItems.length} color="primary">
        <ShoppingBasketOutlinedIcon
          fontSize="large"
          data-mdb-toggle="offcanvas"
          data-mdb-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{ cursor: "pointer" }}
        />
      </Badge>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5
            id="offcanvasRightLabel"
            style={{ fontWeight: "bold", color: "#542E90" }}
          >
            My Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-mdb-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h6
            style={{
              textAlign: "left",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Cart Summary
          </h6>
          {props?.cartItems?.map((item) => (
            <div className="container text-center">
              <div
                className="row"
                style={{ border: "1px solid #ECECEC", padding: "5px" }}
              >
                <div
                  className="col-4"
                  style={{ width: "110px", height: "90px" }}
                >
                  <img
                    src={item.img[0]}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="col-8">
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  >
                    {props.quantity}
                  </p>
                  <p
                    style={{
                      color: "#542E90",
                      fontWeight: "bold",
                      margin: "0",
                      textAlign: "left",
                    }}
                  >
                    {item.priceAfterDisc} LE
                  </p>
                </div>
              </div>
            </div>
          ))}

          <h5 style={{ fontWeight: "bold", margin: "20px 0" }}>
            Total: 19.99 LE
          </h5>
          <button
            style={{
              backgroundColor: "#FFF200",
              borderRadius: "24px",
              fontWeight: "bold",
              border: "none",
              width: "180px",
              height: "44px",
              marginRight: "5px",
            }}
          >
            Review Cart
          </button>
          <button
            style={{
              backgroundColor: "#542E90",
              borderRadius: "24px",
              fontWeight: "bold",
              border: "none",
              width: "180px",
              height: "44px",
              color: "white",
            }}
          >
            Complete Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
