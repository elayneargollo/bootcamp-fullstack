import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
    constructor(){
        super();

        this.state ={
            secondsVisible:0
        };

        this.inverval = null;
    }

    componentDidMount(){

        this.inverval = setInterval(() => {

            const { secondsVisible } = this.state;

            this.setState({
                secondsVisible: secondsVisible + 1,
            });
        }, 1000);

    }


    componentDidUpdate(){
        console.log(' componentDidUpdate de user.js')
    }

    componentWillUnmount(){ // elimina qualquer efeito colateral
        clearInterval(this.inverval);
    }

    render(){

        const {users} = this.props;
        const {secondsVisible} = this.state;

        return (
            <div>
                <p>Component Users visivel por {secondsVisible} segundos </p>
                <ul>
                    {users.map((user) => {
                        const { login, name, picture } = user; 
                        
                        return (
                        <li key={login.uuid}>
                            <User user={user}/>
                        </li>
                        );
                    })}
                </ul>

            </div>
        );
      
    }
}