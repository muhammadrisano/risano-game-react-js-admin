import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ListUser extends Component {
    logout = (e) => {
        sessionStorage.removeItem("role_id")
        sessionStorage.removeItem("id_user")
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("fullname")
        // window.location.reload();

    }
    render() {


        return (
            <div>
                <ul class="list-group">
                    <li class="list-group-item"></li>
                    <li class="list-group-item bg-dark text-white"><b>Menu</b></li>
                    <Link to="/leaderboard" type="button" class="list-group-item list-group-item-action">Leaderboard</Link>
                    <Link to="/pattern" class="list-group-item list-group-item-action">Combo Patter</Link>
                    <Link to="/sound" class="list-group-item list-group-item-action">Edit Sound</Link>
                    <Link to="/" onClick={() => { this.logout() }} class="list-group-item list-group-item-action">Logout</Link>
                    <li class="list-group-item"><br /><br /><br /><br /><br /><br /><br /><br /><br /></li>
                </ul>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
    }

}

export default connect(mapStateToProps)(ListUser);

