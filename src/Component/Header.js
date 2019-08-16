import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'



class Header extends Component {

    logout = (e) => {
        sessionStorage.removeItem("role_id")
        sessionStorage.removeItem("card_number")
        sessionStorage.removeItem("id_user")
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("photo")
        sessionStorage.removeItem("fullname")
        window.location.reload();

    }
    showFormLogin = (e) => {
        e.preventDefault()
        return this.props.showLogin()
    }
    render() {
        console.log(this.props.role_id)
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a class="navbar-brand" href="http://localhost:3000/books">Titak-titak dididing</a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>


                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul class="navbar-nav ml-auto">


                            </ul>
                        </div>

                    </div>
                </nav>

                {/* <Navbar color="light" light expand="md" className="headernav fixed-top">
                    <NavbarBrand href="/books" className="font-weight-bold brand">BOOKS</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/Transaksi"><h4 className="mr-5">Transaksi Buku</h4></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }

}

export default connect(mapStateToProps)(Header);
