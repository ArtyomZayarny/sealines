import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';

class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    data:{}
  }
}
  getData = () => {

    let data = {}
     fetch('http://localhost:3012/')
     .then(res => res.json())
     .then(
       (result) => {
        this.setState({
          data:result
        });
       }
     )
  }

  render() {
    return(
      <>
        <Navbar getData={this.getData}/>
        <Content data={this.state.data}/>
      </>
    )
  }
   
}

export default App; 
