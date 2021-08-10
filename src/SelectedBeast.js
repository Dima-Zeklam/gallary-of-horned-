import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
        
    };
    
  }
  handleClose = () => {
    this.state = ({
      show: false
    });
  }
  render() {
    return (
      <>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> hello </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Footer;
