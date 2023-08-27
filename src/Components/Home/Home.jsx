import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const resumeUploader = () =>{
    navigate('/login');
  }
  return (
    <div className="row content">
        <div className="col-md-7 home">
            <h3>45366+ Jobs listed</h3>
            <h1>Find your Dream Jobs</h1>
            <p>We provide online instant cash loans with quick approval that suit your term length</p>
        <button className='resume btn btn-outline-success' onClick={resumeUploader}>Upload Your Resume</button>
        </div>
    </div>
  )
}

export default Home
