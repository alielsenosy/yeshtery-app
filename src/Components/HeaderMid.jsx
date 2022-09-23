import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import adidasLogo from "./../images/addidas.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "white" }}
    >
      <Container style={{ width: "70%" }}>
        <Navbar.Brand href="#">
          <TextField
            label="Search"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#"
              style={{ color: "black", textAlign: "center", margin: "auto" }}
            >
              <img src={adidasLogo} alt="" />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="" style={{ color: "black", fontWeight: "bold" }}>
              <FavoriteBorderOutlinedIcon fontSize="large" /> Wishlist
            </Nav.Link>
            <Nav.Link href="" style={{ color: "black", fontWeight: "bold" }}>
              <Person2OutlinedIcon fontSize="large" /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
