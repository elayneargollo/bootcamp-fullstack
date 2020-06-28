import React, { Component } from 'react';
import { getNewTimestamp } from './Helpers/timestamp';

export default class App extends Component {
  
  constructor(){
    super(); /* herda o construtor da class Component */  

    this.state = {
      clickArray : [],
    };
  }

  handleClick = () => {

    /* newClickArray será uma cópia do clickArray para garantir a imutabilidade */
    const newClickArray = Object.assign([], this.state.clickArray);
    /* adciono no array */
    newClickArray.push(getNewTimestamp());

    /* realimenta o vetor. Substituo todo o estado por um estado novo */
    this.setState({clickArray: newClickArray});
  }

  componentDidUpdate(){
    document.title = this.state.clickArray.length.toString();
  }

  render() {

    const {clickArray} = this.state;

    return (

    <div>

      <div className="padding default-flex-row">
        <span className="small material-icons">check</span>
        <span>React e Class Components</span>
      </div>
    
      <button onClick = {this.handleClick}>Click aqui</button>

        <ul>
            {
              clickArray.map(item => {
                return <li key = {item}>{item}</li>
              })
            }
        </ul>

    </div>

    )
  }
}
