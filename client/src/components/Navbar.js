import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import ModalAuth from "../navigation/authentication/ModalAuth"

class Navig extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modalShow: false, modalInfo: ""};
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false, modalInfo: "" });

    return(
      <Navbar expand="lg">
      <Navbar.Brand href="/">UMLA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/cardgame">CardGame</Nav.Link>
        </Nav>
        <Button variant="outline-success"
          onClick={() => this.setState({ modalShow: true, modalInfo: "caca" })}
        >
          Login
            </Button>
        <ModalAuth 
          onHide={modalClose}
          show={this.state.modalShow}
          modalTitle={this.state.modalInfo}
          loginState={"login"}
        />
      </Navbar.Collapse>
    </Navbar>
    );
  }

}

export default Navig;