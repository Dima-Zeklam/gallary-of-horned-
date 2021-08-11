import React from 'react';
// import Data from './Data.json';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.Data = this.props.Data;
  }

  handlingTitle = (title) => {
    this.props.handlingTitle(title);

  }

  handleShow = () => {
    this.props.handleShow();
  }
  handleClose = () => {
    this.props.handleClose();
  }
  render() {



    return (
      this.props.Data.map((item, index) => {
        return (
          <HornedBeasts
            key={index}
            title={item.title}
            img={item.image_url}
            description={item.description}
            keyword={item.keyword}
            horns={item.horns}
            handlingTitle={this.handlingTitle}
            handleShow={this.handleShow}
            handleClose={this.handleClose}
          />
        );
      })
    );
  }
}
export default Main;

