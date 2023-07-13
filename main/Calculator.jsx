import React, {Component} from 'react'
import './Calculator.css'

import Display from '../components/display'
import Button from '../components/button'

const initialState = {
    displayValue:'0',
    clearDisplay:false,
    operation:null,
    values:[0,0],
    current:0
}

export default class Calculator extends Component
{
    state = {...initialState}; // Setando a Variável state

   constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this);  // Maneira mais prática de se setar a referencias dos métodos e criar seus objetos
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
   }


    clearMemory(){
        this.setState({...initialState});
    }

    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay:true});
        }else{
            const equal = operation === '=';  
            const currentOperation = this.state.operation;
            let values = [...this.state.values]; 

            switch (currentOperation){
            case '+':                       
                values[0] = values[0] + values[1]; 
                values[1] = 0;        
            break
            case '-':
                values[0] = values[0] - values[1];
                values[1] = 0;  
            break
            case '/': 
                values[0] = values[0] / values[1];
                values[1] = 0;  
            break
            case '*':
                values[0] = values[0] * values[1]; 
                values[1] = 0;             
            break
            default:
            }

            this.setState({
                displayValue: values[0],
                operation: equal ? null : operation,
                current: equal ? 0 : 1,
                clearDisplay: !equal,
                values
            });
        }

        
    }

    addDigit(digit){
        if(digit === '.' && this.state.displayValue.includes('.')){
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;
        this.setState({displayValue, clearDisplay:false});

        if(digit !== '.'){

            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values]
            values[i] = newValue;
            this.setState({values});
            console.log(values)
        }
    }



    render(){
        return(
            <div className="calculator">

                <Display value= {this.state.displayValue}/>

                <Button label="AC" triple click={this.clearMemory}/>
                <Button label="/" operation click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit} />
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}