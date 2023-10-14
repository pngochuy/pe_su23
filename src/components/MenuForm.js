import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      searchResult: "",
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    let searchValue;
    if (this.search.value == "") {
      searchValue = "Nothing";
    } else {
      searchValue = this.search.value;
    }
    this.setState({ searchResult: `${searchValue}` });
    this.search.value = "";
    event.preventDefault();
  }

  render() {
    const customOrange = "#FFA500";
    return (
      <div>
        <Navbar
          dark
          expand="md nav-container"
          style={{
            backgroundColor: customOrange,
            textDecoration: "none",
          }}
        >
          <div className="container">
            <div>
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/FPT_Education_logo.svg/2560px-FPT_Education_logo.svg.png"
                  height="33"
                  width="100"
                  alt="Ristorante Con Fusion"
                />
              </NavbarBrand>
            </div>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/">
                    <span className="fa fa-info fa-lg"></span> News
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <form
                  class="form-inline my-2 my-lg-0"
                  onSubmit={this.handleLogin}
                >
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search"
                    aria-label="Search"
                    ref={(input) => (this.search = input)}
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </NavItem>

              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>SEARCH</ModalHeader>
                <ModalBody>
                  <h3>You search: </h3> {this.state.searchResult}
                </ModalBody>
              </Modal>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
