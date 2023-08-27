import React, { useState } from "react";
import logo from "../../Images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Admin = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userName = queryParams.get('name');
    
    const [jobListings, setJobListings] = useState([]);

    const postJob = (newJob) => {
        setJobListings(prevListings => [...prevListings, newJob]);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navv-bar">
                <div className="container-fluid">
                    <div className="logo-side">
                        <img className="img img-fluid" src={logo} alt="logo" />
                        <div className="logo-text">
                            <a className="navbar-brand">Admin Panel</a>
                            <p className="logo-p">Manage Your Dashboard</p>
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
                                <Link to="/admin" className="nav-link active">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/users" className="nav-link">
                                    Users
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/posts" className="nav-link">
                                    Posts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/settings" className="nav-link">
                                    Settings
                                </Link>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <button className="btn btn-outline" type="button">
                                Profile
                            </button>
                            <button className="btn btn-outline-danger" type="button" onClick={postJob}>
                                Post a Job
                            </button>
                            <button className="btn btn-outline-danger" type="button" onClick={handleLogout}>
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Welcome to the Admin Panel</h2>
                        {userName && <p>Hello, {userName}!</p>}
                        <p>Manage your dashboard efficiently.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Quick Stats</h5>
                                <ul>
                                    <li>Total Users: 100</li>
                                    <li>Total Posts: {jobListings.length}</li>
                                    <li>Pending Approvals: 10</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
