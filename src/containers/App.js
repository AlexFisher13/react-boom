import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserCard from '../components/UserCard'

class App extends Component {
  render() {
    return (
      <div>
        {
            //распаковываем наши props и выводим юзеров
            this.props.users.map((user, i) =>
            <UserCard key={i} name={user}></UserCard>
        )}
      </div>
    );
  }
}
//часть нашего общего store передаем в props
function mapStateToProps(store) {
    return {
      //переменую в props назовем users, и запихнет в нее весь store
      users: store
    }
}

//коннектим App к общему store c помощью функции mapStateToProps
export default connect(mapStateToProps)(App)
