import React, { Component } from 'react';
import Header from '../Component/Header';
import '../assets/css/user.css';
import ListUser from '../Component/ListUser';
import moment from 'moment';
import { connect } from 'react-redux'
import { async } from 'q';
import { getsound, deletesound, addsound } from '../redux/actions/sounds'
import swal from 'sweetalert'

class Sound extends Component {

    constructor() {
        super();
        this.state = {
            datasound: [],
            no_button: "",
            sound: ""

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDelete = (id) => {
        this.props.dispatch(deletesound(id))
            .then((res) => {
                swal({
                    title: "Delete !",
                    text: "Insert Success !!",
                    icon: "success",
                    button: "oke"
                });
                this.getSound()
            })
            .catch((err) => {
                console.log(err)
                swal({
                    title: "delete",
                    text: "Delete Failed!",
                    icon: "warning",
                    buttons: "oke",
                })
            })

    }
    componentDidMount = () => {
        this.getSound()
    }
    getSound = async () => {
        await this.props.dispatch(getsound())
            .then((res) => {

                this.setState({
                    datasound: this.props.datasound
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    handleaddsound = async () => {
        console.log(this.state.no_button)
        console.log(this.state.sound)
        await this.props.dispatch(addsound({
            no_button: this.state.no_button,
            sound: this.state.sound,
        }))
            .then((res) => {
                swal({
                    title: "Add !",
                    text: "Add Success !!",
                    icon: "success",
                    button: "oke"
                });
                this.getSound()
            })
            .catch((err) => {
                console.log(err)
                swal({
                    title: "Add",
                    text: "Add Failed!",
                    icon: "warning",
                    buttons: "oke",
                })
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
                                Sound
                            </div>
                            <br />
                            <h4 className="text-center">Configurasi Sound</h4>
                            <div class="card-body">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add Sound</button>
                                <br /><br />
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">No Button</th>
                                            <th scope="col">Sound</th>
                                            <th scope="col">action</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {this.state.datasound.map((item) =>
                                            <tr>
                                                <th scope="row">{noUrut++}</th>
                                                <td>{item.no_button}</td>
                                                <td>{item.sound}</td>
                                                <td>
                                                    <button className="btn btn-primary">Edit</button>
                                                    <button className="btn btn-danger" onClick={() => { this.handleDelete(item.id_button) }}>Delete</button>
                                                </td>

                                            </tr>
                                        )}
                                    </tbody>
                                </table>


                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="no_button">No Button</label>
                                                        <input type="text" class="form-control" id="no_button" name="no_button" placeholder="No Button" onChange={this.handleChange} value={this.state.no_button} />

                                                    </div>
                                                    <div class="form-group">
                                                        <label for="sound">Link Sound</label>
                                                        <input type="text" class="form-control" id="sound" name="sound" placeholder="Sound" onChange={this.handleChange} value={this.state.sound} />

                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.handleaddsound}>Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
        datasound: state.sounds.datasound
    }

}

export default connect(mapStateToProps)(Sound);