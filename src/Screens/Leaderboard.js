import React, { Component } from 'react';
import Header from '../Component/Header';
import '../assets/css/user.css';
import ListUser from '../Component/ListUser';
import moment from 'moment';
import { connect } from 'react-redux'
import { getleaderboard } from '../redux/actions/leaderboards'
import { async } from 'q';

class Leaderboard extends Component {

    constructor() {
        super();
        this.state = {
            leaderboard: []
        }
    }

    componentDidMount = async () => {
        await this.props.dispatch(getleaderboard())
            .then((res) => {
                this.setState({
                    leaderboard: this.props.leaderboard
                })
                console.log(this.props.leaderboard)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        let noUrut = 1;
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-md-3">
                        <ListUser />
                    </div>
                    <div className="col-md-9">
                        <div class="card">
                            <div class="card-header">
                                History Borrow
                            </div>
                            <br />
                            <h4 className="text-center">Leaderboard</h4>
                            <div class="card-body">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">username</th>
                                            <th scope="col">score</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {this.state.leaderboard.map((item) =>
                                            <tr>
                                                <th scope="row">{noUrut++}</th>
                                                <td>{item.username}</td>
                                                <td>{item.score}</td>

                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {

        token: state.users.token,
        id_user: state.users.id_user,
        leaderboard: state.leaderboards.leaderboard
    }

}

export default connect(mapStateToProps)(Leaderboard);