import React from "react";
import logo from "../../Images/logo.svg";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    // const history = useHistory();

    // const loginHandler = () => {
    //     history.push('../loginComponent/Login');
    // };

    const navigate = useNavigate();
    const postJob = () => {
        navigate('/postJob');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navv-bar">
                <div className="container-fluid">
                    <div className="logo-side">
                        <img className="img img-fluid" src={logo} alt="logo" />
                        <div className="logo-text">
                            <a className="navbar-brand">Job World</a>
                            <p className="logo-p">Find Your Dream Jobs</p>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-items" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/get-jobs" className="nav-link">
                                    Browse Jobs
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle disabled"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle disabled"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Blog
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>

                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to="/login">
                                <button className="btn btn-outline">
                                    Login
                                </button>
                            </Link>

                            <button className="btn btn-outline-primary" type="submit" onClick={postJob}>
                                Post a Job
                            </button>
                        </form>
                    </div>
                </div>
            </nav >
        </>
    );
};
export default Navbar;
