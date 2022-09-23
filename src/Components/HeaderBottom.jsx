const HeaderBottom = () => {
  return (
    <div
      className="headerBottom"
      style={{
        margin: "auto",
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        padding: "10px 0",
      }}
    >
      <div className="container text-center" style={{ width: "70%" }}>
        <div className="row">
          <div className="col-sm">Men</div>
          <div className="col-sm">Women</div>
          <div className="col-sm">Unisex</div>
          <div className="col-sm">Kids</div>
          <div className="col-sm">Best Sellers</div>
          <div className="col-sm">New Arrivals</div>
          <div className="col-sm" id="offers" style={{ color: "#F11133" }}>
            Offers
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
