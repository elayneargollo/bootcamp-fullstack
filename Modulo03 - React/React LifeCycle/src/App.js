import React, { Component } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';


export default class App extends Component {

  constructor(){
    super();

    this.state = {
      user: [],
      showUsers: false,
    }
  }
  
  async componentDidMount(){ // requisicoes http por que só é executado apenas uma vez no componente
    const res = await fetch (
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );

    const json = await res.json();
    
    this.setState({
      users: json.results,
    });
  }

  componentDidUpdate(){
    console.log(' componentDidUpdate de App.js')
  }

  componentWillMount(){
    console.log(' componentWillMount de App.js')
  }

  handleShowUsers = (isChecked) => {
    this.setState({showUsers: isChecked});

  }
  
  render() {

    const {showUsers, users} = this.state;

    return (
      
    <div>

      <h3>React LifeCycle</h3>
      <Toggle enabled={showUsers} onToggle={this.handleShowUsers}/>

       <hr />
       {showUsers && <Users users={users}/>}

     </div>

    )
  }
}
