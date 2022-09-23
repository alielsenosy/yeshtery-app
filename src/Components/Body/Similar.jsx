import React, { Component } from "react";
import "./similar.scss";
import adidasLogo from "./../../images/addidas.png";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export class Similar extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch(`https://6329f6dc713d41bc8e67f6f0.mockapi.io/products`)
      .then((res) => res.json())
      .then((products) => this.setState({ products }));
  }
  render() {
    let { products } = this.state;
    return (
      <div className="similar">
        <h4>Similar Products</h4>
        <h5>You may like these products also</h5>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            {products?.map((product) => (
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="col card" id={product.id} key={product.id}>
                  <img
                    src={product.img[0]}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text" id="prodName">
                      {product.name}
                    </p>
                    <div className="d-flex">
                      <div className="cardLeft">
                        <p className="priceAfter">
                          {product.priceAfterDisc} LE
                        </p>
                        <span className="price">{product.price} LE</span>
                        <span className="disc">{product.discount}%</span>
                      </div>
                      <div className="cardRight">
                        <img src={adidasLogo} alt="" />
                      </div>
                    </div>
                    <div className="rating">
                      <Rating name="read-only" value={product.stars} readOnly />
                      <span className="starNum">{product.stars} of 5</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="from">From: {product.from}</span>
                      <span className="to">To: {product.to}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Similar;
