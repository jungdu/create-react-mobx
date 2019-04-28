import React, {Component} from 'react';
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

@observer
class App extends Component {

  @observable count = 0;

  @action
  handleIncreaseClick = () => {
    this.count = this.count + 1;
  }

  render(){
    return (
      <div className="App">
        <p> count : {this.count} </p>
        <p> <button onClick={this.handleIncreaseClick}>INCREASE</button> </p>
      </div>
    );
  }
}

export default App;
