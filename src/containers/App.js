import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserCard from '../components/UserCard'

class App extends Component {

  addNote() {
      const input = document.getElementsByTagName('input')[0];
      this.props.onAddNote(input.value);
      input.value = '';
  }

  delNote() {
      console.log("del")
      this.props.delNote('Fisher');
  }

  render() {
    return (
      <div className='editor'>
         <input type="text"/>
         <button onClick={this.addNote.bind(this)} className='add'>Add</button>
         <button onClick={this.delNote.bind(this)} className='del'>del</button>
         <div className='grid'>
             {
                 this.props.users.map((user, i) =>
                     <UserCard key={i} name={user} del={this.props.delNote.bind(this)}></UserCard>
                 )}
         </div>
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
        onAddNote: (noteText) => {
            dispatch({type: 'ADD_USER', payload: noteText})
        },
        delNote: (noteText) => {
            dispatch({type: 'DEL_USER', payload: noteText})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)