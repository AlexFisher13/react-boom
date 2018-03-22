import React, {Component} from 'react'

class UserCard extends Component {
    render() {
        return (
            <div>
                <li>{this.props.name}</li>
            </div>
        )
    }
}
export default UserCard