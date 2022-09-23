import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogo from "./../images/navLogo.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#FFF100" }}
    >
      <Container style={{ width: "70%" }}>
        <Navbar.Brand to="/">
          <img src={navLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" style={{ color: "black" }}>
              <ChevronLeftIcon />
              Valentine’s Day Offers! Buy Two Get One Free{" "}
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Shop Now <ChevronRightIcon />
              </span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="" style={{ color: "black", fontWeight: "bold" }}>
              <PhoneInTalkOutlinedIcon /> Contact Us
            </Nav.Link>
            <Nav.Link href="" style={{ color: "black", fontWeight: "bold" }}>
              <ShoppingCartOutlinedIcon /> Track Order
            </Nav.Link>
            <Nav.Link href="" style={{ color: "black", fontWeight: "bold" }}>
              <LocationOnOutlinedIcon /> Find A Store
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
