import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { alertMessage } from '../../Utills/alertMessage';
import axios from 'axios';

const ApplicationPage = () => {
    const { user } = useAuth();
    const { id } = useParams();

    const handleApplyForm = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputData = Object.fromEntries(formData.entries());
        const applicantData = {
            jobId: id,
            ...inputData,
            applicantName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            submitedAt: new Date().toISOString()
        }

        //create request using axios
        
          axios.post("http://localhost:3000/application/apply", applicantData)
          .then((response) => {
           if(response.data){
             alertMessage('Your application submitted successfully')
           }
           
          })
          .catch((error) => {
            console.log(error);
          });
        
    }
    return (
      <div className="max-w-7xl mx-auto px-5 flex flex-col justify-center items-center">
        <h1 className='text-3xl font-bold text-secondary capitalize py-5'>Apply now</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleApplyForm} className="fieldset">
              <label className="label">Portfolio Link</label>
              <input type="url" name='portfolioLink' className="input" placeholder="Portfolio Link" />
              <label className="label">Linkedin Link</label>
              <input type="url" name='linkedinLink' className="input" placeholder="Linkedin Link" />
              <label className="label">Resume Link</label>
              <input type="url" name='resumeLink' className="input" placeholder="Resume Link" />             
              <button type='submit' className="btn btn-primary mt-4 capitalize">apply</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ApplicationPage;