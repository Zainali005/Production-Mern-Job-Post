import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <section className="mb-4 contact" style={{ backgroundColor: '#d8ffff' }}>
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label htmlFor="name">Your name</label>
                                        <input type="text" id="name" name="name" className="form-control" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label htmlFor="email">Your email</label>
                                        <input type="text" id="email" name="email" className="form-control" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <label htmlFor="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-md-left">
                                <button type="submit" className="btn btn-primary mt-3">Send</button>
                            </div>
                            <div className="status"></div>
                        </form>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Islamabad, Pakistan</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 92 3127374199</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>zainali5002@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
