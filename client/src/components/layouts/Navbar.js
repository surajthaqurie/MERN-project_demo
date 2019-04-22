import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" href="home.html">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="product.html">Products</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item  ">
                            <a className="nav-link" href="about.html">Services</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="about.html">New Offers</a>
                        </li>
                        <li className="nav-item  ">
                            <a className="nav-link" href="about.html">Customer Care</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="about.html">Save More On App</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 mr-auto ">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;
