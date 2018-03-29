import React, {Component} from 'react'

class UserCard extends Component {

    render() {
        return (
            <div className='userCard'>
                <p>{this.props.name}</p>
                <button className='del' onClick={this.props.del}>Del</button>
            </div>
        )
    }
}
export default UserCard