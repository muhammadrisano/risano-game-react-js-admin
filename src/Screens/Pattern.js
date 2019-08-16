import React, { Component } from 'react';
import Header from '../Component/Header';
import '../assets/css/user.css';
import ListUser from '../Component/ListUser';
import moment from 'moment';
import { connect } from 'react-redux'
import { async } from 'q';
import { getpattern, deletepattern, addpattern } from '../redux/actions/patterns'
import swal from 'sweetalert'

class Pattern extends Component {

    constructor() {
        super();
        this.state = {
            datapattern: [],
            pattern: "",
            delay: "",
            plushpoint: "",
            level: ""

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDelete = (id) => {
        this.props.dispatch(deletepattern(id))
            .then((res) => {
                swal({
                    title: "Delete !",
                    text: "Insert Success !!",
                    icon: "success",
                    button: "oke"
                });
                this.getPettern()
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
        this.getPettern()
    }
    getPettern = async () => {
        await this.props.dispatch(getpattern())
            .then((res) => {
                console.log(this.props.pattern)
                this.setState({
                    datapattern: this.props.pattern
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    handleaddpettern = () => {
        this.props.dispatch(addpattern({
            pattern: this.state.pattern,
            delay: this.state.delay,
            plushpoint: this.state.plushpoint,
            level: this.state.level
        }))
            .then((res) => {
                swal({
                    title: "Add !",
                    text: "Add Success !!",
                    icon: "success",
                    button: "oke"
                });
                this.getPettern()
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
                                Pattern
                            </div>
                            <br />
                            <h4 className="text-center">Configurasi Pattern</h4>
                            <div class="card-body">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add Pattern</button>
                                <br /><br />
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">pattern</th>
                                            <th scope="col">delay</th>
                                            <th scope="col">plushpoint</th>
                                            <th scope="col">action</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {this.state.datapattern.map((item) =>
                                            <tr>
                                                <th scope="row">{noUrut++}</th>
                                                <td>{item.pattern}</td>
                                                <td>{item.delay}</td>
                                                <td>{item.plushpoint}</td>
                                                <td>
                                                    <button className="btn btn-primary">Edit</button>
                                                    <button className="btn btn-danger" onClick={() => { this.handleDelete(item.id_pattern) }}>Delete</button>
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
                                                        <label for="pattern">Pettern</label>
                                                        <input type="text" class="form-control" id="pattern" name="pattern" placeholder="Pettern" onChange={this.handleChange} value={this.state.pattern} />

                                                    </div>
                                                    <div class="form-group">
                                                        <label for="delay">Delay</label>
                                                        <input type="text" class="form-control" id="delay" name="delay" placeholder="Delay" onChange={this.handleChange} value={this.state.delay} />

                                                    </div>
                                                    <div class="form-group">
                                                        <label for="plushpoint">Plush Point</label>
                                                        <input type="text" class="form-control" id="plushpoint" name="plushpoint" placeholder="Plush Pattern" onChange={this.handleChange} value={this.state.plushpoint} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="level">Level</label>
                                                        <input type="text" class="form-control" id="level" name="level" placeholder="Level" onChange={this.handleChange} value={this.state.level} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.handleaddpettern}>Save changes</button>
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
        pattern: state.patterns.pattern
    }

}

export default connect(mapStateToProps)(Pattern);