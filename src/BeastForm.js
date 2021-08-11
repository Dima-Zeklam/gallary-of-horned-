import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
class BeastForm extends React.Component {
  handleFilter = (event)=>{
    event.preventDefault();
    this.props.changeFilter(parseInt(event.target.value));
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleShow = () => {
    this.props.handleShow();
  }
  handleClose = () => {
    this.props.handleClose();
  }
  Click = () => {
    this.handleShow();
    this.props.handlingTitle(this.props.title);

  }


  render() {
    // console.log(this.props);
    return (
      <>
        <Form>
          <Form.Select size="lg"
            onChange = {this.handleFilter}
            name = 'filter'
          >
            <option value='0'>All</option>
            <option value='1'>one</option>
            <option value='2'>two</option>
            <option value='3'>three</option>
            <option value='100'>woow</option>
          </Form.Select>
        </Form>
      </>
    );
  }
}
export default BeastForm;
