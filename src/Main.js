import React from 'react';
import Data from './Data.json';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {


  render() {
    return (
      Data.map((item, index) => {
        return (
          <HornedBeasts
            key={index}
            title={item.title}
            img={item.image_url}
            description={item.description}
            keyword={item.keyword}
            horns={item.horns}
            handling = {this.props.handling}

          />
          
        );
      })




    );
  }
}

export default Main;

