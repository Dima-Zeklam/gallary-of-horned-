import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Data from './Data.json';
import SelectedBeast from './SelectedBeast';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Element: {},
      show: false
    };
    this.Data = Data;
    this.selectedObject = {};
  }
  handlingTitle = (title) => {
    this.selectedObject = this.Data.find(element => {
      if (element.title === title) {

        return element;
      }

    });
    this.setState({
      show: true,
      Element: this.selectedObject
    });

  }

  handleShow = () => {
    this.setState({
      show: true,
      Element: this.selectedObject
    });
  }
  handleClose = () => {
    this.setState({
      show: false,
      Element: this.selectedObject
    });
  }
  render() {
    

    return (
      <>
        <Header />
        <Main handlingTitle={this.handlingTitle}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          Data={Data}
        />
        <SelectedBeast Element={this.state.Element} handleShow={this.handleShow}
          handleClose={this.handleClose}
          show={this.state.show}
          Element={this.state.Element}/>
        <Footer />
      </>
    );
  }
}
export default App;
