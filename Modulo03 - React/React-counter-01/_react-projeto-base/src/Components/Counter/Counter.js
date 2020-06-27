import React, { Component } from 'react'

import css from './counter.module.css'

import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'
import Value from './Value'
import Steps from './Steps'

export default class Counter extends Component {


    /* Se não colocar arrow function perde o this */
    handleButtonClick = (type) => {

        const {currentCounter, steps} = this.state;

       this.setState({ /* para modificar o estado de currentCounter */
            currentCounter: (type === '+') ? currentCounter + 1 : currentCounter - 1,
            steps: steps + 1,
       })

    };

    constructor(){
        super();
        /*
             this.currentCounter = 2;
        Isso não funciona muito bem. Não conseguimos incrementar ou decrementar.
        */ 

       this.state = {
           currentCounter : 2,
           steps: 0,
       };
      
    }

    render() {
        const { currentCounter, steps} = this.state;
        
        return (
            
            <div className={css.counterContainer}>
              <DecrementButton onDecrement = {this.handleButtonClick}/>   
              <Value value={currentCounter} />
              <IncrementButton onIncrement = {this.handleButtonClick}/>         
              <Steps steps={steps} />
            </div>
        )
    }
}
