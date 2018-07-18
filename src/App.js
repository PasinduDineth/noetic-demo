import React, { Component } from 'react';
import './App.css';
import { Container, Row} from 'reactstrap';
import NavBar from '../src/components/nav-bar';
import RightSideComponent from './components/right-side-component'
import LeftComponent from './components/left-component'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Row>
            <LeftComponent />
            <RightSideComponent />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
