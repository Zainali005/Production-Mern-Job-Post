import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const JobForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:8080/post-job", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ title, description, company, location })
            });

            if (response.ok) {
                alert('Job posted successfully');
            } else {
                alert('Failed to post job');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="container my-2">
            <h2>Post a New Job</h2>
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter company" value={company} onChange={e => setCompany(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter location" value={location} onChange={e => setLocation(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Post Job
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default JobForm;