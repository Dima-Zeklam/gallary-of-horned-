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
      show: true,
      ele: {}
    };

  }

  handling = (title) => {

    let selectedObject = Data.find(element => {
      if (element.title === title) {

        this.state = ({
          ele: element
        });

        return element;
      }
    });
    return selectedObject;
  }

  handleClose = () => {
    this.state = ({
      show: false
    });
  }

  render() {

    return (

      <>

        <Header />

        <Main handling={this.handling} />

        <SelectedBeast ele = {this.state.ele} handleClose={this.handleClose} show={this.state.show} />

        <Footer />

      </>
    );
  }
}

export default App;
