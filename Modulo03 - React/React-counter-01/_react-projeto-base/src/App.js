import React, { Component } from 'react';
import Counter from './Components/Counter/Counter';
import Counter2 from './Components/Counter/Counter2'
import Band from './Components/Counter/Band'

export default class App extends Component {
  
  constructor(){
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleCount = (type) => {

  const {currentCounter, steps} = this.state;

   this.setState({ /* para modificar o estado de currentCounter */
        currentCounter: (type === '+') ? currentCounter + 1 : currentCounter - 1,
        steps: steps + 1,
   })

};

  render() { 

    const {currentCounter, steps} = this.state;

    return(
      <>

      <h3>Band</h3>

          <Band/>

      <h3>Counter</h3>

          <Counter/>
          <Counter/>
          <Counter/>
     
      <h3>Counter 2 </h3>

          <Counter2 
          onCount={this.handleCount} 
          countValue={currentCounter} 
          currentStep={steps}
          />

          <Counter2
          onCount={this.handleCount} 
          countValue={currentCounter} 
          currentStep={steps}
          />

          <Counter2 
          onCount={this.handleCount} 
          countValue={currentCounter} 
          currentStep={steps}
          />
      </>

    );
  }

}
