import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
     
    };
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  Click = () => {
    this.props.handling(this.props.title);

  }


  render() {
    // console.log(this.props);
    return (
      <>
        <Card onClick={this.Click} style={{ width: '18rem', display: 'inline-block', margin: '20px', textAlign: 'center' }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description} 🦄
            </Card.Text>
            <p>Lovers {this.state.counter} 💗 </p>
            <Button onClick={this.increaseCounter} variant="primary">love it </Button>
          </Card.Body>
        </Card>

      </>);
  }

}

export default HornedBeasts;
