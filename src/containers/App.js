import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserCard from '../components/UserCard'

class App extends Component {

  addUser() {
      const input = document.getElementsByTagName('input')[0];
      this.props.onAddUser(input.value);
      console.log(this.props.users);
      input.value = '';
  }

  render() {
    return (
      <div>
         <input type="text"/>
         <button onClick={this.addUser.bind(this)}>Add</button>
         {
            this.props.users.map((user, i) =>
            <UserCard key={i} name={user}></UserCard>
        )}
      </div>
    );
  }
}
function mapStateToProps(store) {
    return {
      users: store
    }
}
function mapDispatchToProps(dispatch){
    return {
        onAddUser: (userName) => {
            dispatch({type: 'ADD_USER', payload: userName})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)