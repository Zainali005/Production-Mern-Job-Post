import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaKey } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [user, setUserState] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const handlerInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserState({ ...user, [name]: value });
    };
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;

        try {
            const response = await fetch("http://localhost:8080/register", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, cpassword })
            });

            if (response.ok) {
                const data = await response.json();
                window.alert("Registration Successful");
                console.log("Registration successful");
                setUserState({ ...user, ...data });
                navigate(`/admin?name=${user.name}`);
            } else {
                window.alert("Invalid Registration");
                console.log("Invalid registration");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };



    return (
        <section className="vh-100" style={{ backgroundColor: '#d8ffff' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form method='POST' className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <FaUser className="fa-lg me-3" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    <input type="text" name='name' id="form3Example1c" className="form-control"
                                                        value={user.name}
                                                        onChange={handlerInputs}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <FaEnvelope className="fa-lg me-3" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    <input type="email" name='email' id="form3Example3c" className="form-control"
                                                        value={user.email}
                                                        onChange={handlerInputs}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <FaLock className="fa-lg me-3" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    <input type="password" name='password' id="form3Example4c" className="form-control"
                                                        value={user.password}
                                                        onChange={handlerInputs}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <FaKey className="fa-lg me-3" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    <input type="password" name='cpassword' id="form3Example4cd" className="form-control"
                                                        value={user.cpassword} onChange={handlerInputs}
                                                        required
                                                    />

                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree to all statements in <Link to="#!">Terms of service</Link>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" onClick={postData}>Register</button>
                                            </div>

                                            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Already have an account? Login</Link>

                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
