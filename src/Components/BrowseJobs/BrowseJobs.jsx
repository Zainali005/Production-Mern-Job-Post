import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';
const JobList = () => {

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // Filter the jobs based on the search query
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery, jobs]);

  const navigate = useNavigate();
  const applyBtn = () => {
    navigate('/login');
  }
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:8080/get-jobs");
      if (response.ok) {
        const jobList = await response.json();
        setJobs(jobList);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const deleteJob = async (jobId) => {
    try {
      const response = await fetch(`http://localhost:8080/delete-job/${jobId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Job List</h2>
      <Form className='container my-2'>
        <Form.Group controlId="search">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search query"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
      <div className="row">
        {filteredJobs.map(job => (
          <div key={job._id} className="col-md-3 mb-4">
            <div className="media h-100">
              <div className="media-body text-center" style={{ border: '1px solid black' }}>
                <h3>{job.title}</h3>
                <p><FaInfoCircle /> {job.description}</p>
                <p><FaBuilding /> Company: {job.company}</p>
                <p><FaMapMarkerAlt /> Location: {job.location}</p>
                <button className="btn btn-primary mx-3" onClick={applyBtn}>Apply</button>
                <button className="btn btn-danger" onClick={() => deleteJob(job._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
