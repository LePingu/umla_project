import React from 'react';
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login } from './Login';
import { Register } from './Register';

class ModalAuth extends React.Component {

    constructor (props,context) {
        super(props, context)
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          show: false,
        };
    }

    static propTypes = {
        modalTitle: PropTypes.string,
        loginState: PropTypes.oneOf([
            'login',
            'register',
        ]),
    }

    handleClose() {
        this.setState({ show: false });
      }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton> 
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.loginState === 'register' ? <Register/> : <Login/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalAuth;