import React from 'react';
// import Data from './Data.json';
import HornedBeasts from './HornedBeasts';
import BeastForm from './BeastForm';
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      changeFilter: 0,
      hornFilter: -1
    };
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

  changeFilter = (changeFilter) => {
    this.setState({
      changeFilter: changeFilter
    });
  }
  render() {



    return (
      <>
        <BeastForm changeFilter={this.changeFilter} />
        {this.props.Data.filter(element => {
          if (this.state.changeFilter === element.horns) {
            return element;
          } else if (this.state.changeFilter === 0) {
            return element;
          }
        }).map((item, index) => {
          return (
            <>
            
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
            </>
          );
        })}
      </>
    );
  }
}
export default Main;

