import React from "react";
import "./productBody.scss";
import adidasLogo from "./../../images/addidas.png";
import Rating from "@mui/material/Rating";
import Similar from "./Similar";
import { withRouter } from "react-router";
import NavBody from "./NavBody";

class ProductBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      product: {},
      productID: {},
      cart: [],
    };
  }

  getProduct(id) {
    fetch(`https://6329f6dc713d41bc8e67f6f0.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((product) => this.setState({ product }));
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ productID: id });
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id === prevState.productID) return;
    this.setState({ productID: id });
    this.getProduct(id);
    console.log(id);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count === 1 ? 1 : this.state.count - 1,
    });
  }

  addToCart() {
    this.setState((prevState) => ({
      cart: [...prevState.cart, this.state.product],
    }));
  }
  render() {
    let { product } = this.state;

    return (
      <div>
        <NavBody cartItems={this.state.cart} quantity={this.state.count} />

        <div className="productBody">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm" style={{ padding: "0" }}>
                <div className="bigImg">
                  <img src={product.img?.[0]} alt="" />
                </div>
                <div className="d-flex justify-content-around">
                  <div className="smallImg">
                    <img src={product.img?.[1]} alt="" />
                  </div>
                  <div className="smallImg">
                    <img src={product.img?.[2]} alt="" />
                  </div>
                  <div className="smallImg">
                    <img src={product.img?.[3]} alt="" />
                  </div>
                </div>
              </div>
              <div
                className="col-sm"
                style={{ padding: "0", textAlign: "left" }}
              >
                <img
                  src={adidasLogo}
                  alt=""
                  style={{
                    width: "50px",
                    height: "35px",
                    marginBottom: "20px",
                  }}
                />
                <p className="prodName">{product.name}</p>
                <span id="prodGender">{product.gender}</span>
                <div>
                  <Rating name="read-only" value={product.stars} readOnly />
                  <span id="prodStars">{product.stars} of 5</span>
                  <span id="prodRates">{product.rates} Rates</span>
                </div>
                <div id="divPrice">
                  <span id="prodPriceAfter">{product.priceAfterDisc} LE</span>
                  <span id="prodPrice">{product.price} LE</span>
                  <span id="prodDisc">{product.discount}% Off</span>
                </div>
                <p id="size">Size</p>
                <div id="divSize">
                  <ul>
                    <li>Small</li>
                    <li>Medium</li>
                    <li id="large">Large</li>
                    <li>X Large</li>
                    <li>XX Large</li>
                  </ul>
                </div>
                <p id="quantity">Quantity</p>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "#FFF200", fontWeight: "bold" }}
                    onClick={() => this.decrement()}
                  >
                    -
                  </button>
                  <span
                    style={{
                      backgroundColor: "#D9D9D9",
                      width: "150px",
                      fontWeight: "bold",
                      textAlign: "center",
                      lineHeight: "38px",
                    }}
                  >
                    {this.state.count}
                  </span>
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "#FFF200", fontWeight: "bold" }}
                    onClick={() => this.increment()}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button id="add" onClick={() => this.addToCart()}>
                    Add To Cart
                  </button>
                  <button id="pickup">Pickup From Store</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Similar />
      </div>
    );
  }
}

const productsWithRouter = withRouter(ProductBody);
export default productsWithRouter;
