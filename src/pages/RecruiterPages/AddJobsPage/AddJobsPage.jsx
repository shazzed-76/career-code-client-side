import React from "react";
import "./AddJobsPage.css";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { alertMessage } from "../../../Utills/alertMessage";
const AddJobsPage = () => {
    const { user } = useAuth();

    const handlePostJobForm = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { min, max, currency, ...newJob } = Object.fromEntries(
          formData.entries()
        );

        newJob.salaryRange = {min, max, currency}
        newJob.requirements = newJob.requirements.split(',').map(item => item.trim())

        newJob.responsibilities = newJob.responsibilities.split(',').map(item => item.trim())
        
        axios.post("http://localhost:3000/jobs", newJob)
        .then(res => {
            if(res.data.insertedId){
                alertMessage("Your job successfully published.")
            }
        }).catch(error => {
            console.log(error)
        })

    }
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-30 pb-10">
      <h1 className="bg-base-200 py-10 text-center text-3xl sm:text-4xl font-bold text-secondary rounded-sm capitalize">
        post your job
      </h1>
      <form onSubmit={handlePostJobForm}>
        {/* about company and job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Company details</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Job Type</label>
          <div className="filter flex-col md:flex-row gap-y-1">
            <input
              className="btn filter-reset max-w-[100px]"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn max-w-[100px]"
              type="radio"
              name="jobType"
              value="Full-time"
              aria-label="Full-time"
            />
            <input
              className="btn max-w-[100px]"
              type="radio"
              name="jobType"
              value="Part-time"
              aria-label="Part-time"
            />
            <input
              className="btn max-w-[100px]"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
            <input
              className="btn max-w-[100px]"
              type="radio"
              name="jobType"
              value="Contructual"
              aria-label="Contructual"
            />
          </div>

          <label className="label">Company Name</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Company Logo</label>
          <input
            type="url"
            name="company_logo"
            className="input"
            placeholder="Company Logo"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="location"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Category</legend>
          <select
            defaultValue="Select a category"
            name="category"
            className="select"
          >
            <option disabled={true}>Select a category</option>
            <option value="Data & Analytics">Data & Analytics</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="IT Security">IT Security</option>
          </select>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div>
              <label className="label">Min</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Min"
              />
            </div>

            <div>
              <label className="label">Max</label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Max"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select currency"
                name="currency"
                className="select select-neutral"
              >
                <option disabled={true}>Select currency</option>
                <option>BDT</option>
                <option>EU</option>
                <option>USD</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="applicationDeadline" className="input" />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Experience</legend>
          <input type="text" name="experience" className="input" />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Description"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Requirements (must be separate by comma)"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Responsibilities (must be separate by comma)"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Employeer details</legend>
          <label className="label">Email</label>
          <input
            type="email"
            name="hr_email"
            className="input"
            defaultValue={user?.email}
          />

          <label className="label">Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            defaultValue={user?.displayName}
          />
        </fieldset>
        <input
          type="submit"
          className="btn btn-neutral mt-3"
          value="Post Job"
        />
      </form>
    </div>
  );
};

export default AddJobsPage;
