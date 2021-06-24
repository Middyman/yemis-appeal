import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <Navbar className="navbar" expand="lg">
      <Nav.Link as={Link} to={"/home"}>
        <img
          className="header__logo"
          alt=""
          src="https://i.ibb.co/99Cq8Lk/20210612-2328310-8097754657856462.png"
        />
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={"/"}>
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to={"/aboutus"}>
            ABOUT US
          </Nav.Link>

          <Nav.Link onClick={handleAuth} as={Link} to={!user && "/login"}>
            {user ? "LOGOUT" : "LOGIN"}
          </Nav.Link>

          <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Nav.Link as={Link} to={"/bags"}>
                Bags
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to={"/Perfume"}>
                Perfume
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to={"/cloths"}>
                Cloths
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to={"/footwear"}>
                Footwear
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Nav.Link as={Link} to={"/dailypromo"}>
                Daily Promo
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <div className="header__search">
          <input className="header__searchInput" type="text"></input>
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>{" "} */}
        <IconButton>
          <FavoriteBorderIcon
            fontSize="large"
            className="header__favoritebordericon"
          />
        </IconButton>
        <Link className="link" to="/Checkout">
          <IconButton>
            <ShoppingCartIcon
              fontSize="large"
              className="header__shoppingcarticon"
            />
            <span className="header__basketcount">{basket.length}</span>
          </IconButton>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
