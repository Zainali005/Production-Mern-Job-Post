import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
  });

  const handleUserRegister = async () => {
    try {
      await axios.post('http://localhost:8080/register', userData);
      alert('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleJobPost = async () => {
    try {
      await axios.post('http://localhost:8080/post-job', jobData);
      alert('Job posted successfully');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Register User</h2>
        <input
          type="text"
          placeholder="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
        <button onClick={handleUserRegister}>Register</button>
      </div>

      <div>
        <h2>Post Job</h2>
        <input
          type="text"
          placeholder="Title"
          value={jobData.title}
          onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={jobData.description}
          onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company"
          value={jobData.company}
          onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={jobData.location}
          onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
        />
        <button onClick={handleJobPost}>Post Job</button>
      </div>
    </div>
  );
}

export default App;
