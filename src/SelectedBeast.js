import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
class SelectedBeast extends React.Component {



  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.Element.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body> <Image src={this.props.Element.image_url} width="450" /> </Modal.Body>
          <Modal.Footer >
            {this.props.Element.description}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SelectedBeast;
