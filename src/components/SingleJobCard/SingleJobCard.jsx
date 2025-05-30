import React from 'react';
import { Link } from "react-router";

const SingleJobCard = ({ job }) => {
    return (
      <Link to={``} className="card bg-base-100 shadow-sm p-2">
        <div className="flex gap-2 items-center">
          <div className="w-20 h-20 flex justify-center item-center p-1">
            <img
              className="object-contain h-full"
              src={job?.company_logo}
              alt="company logo"
            />
          </div>
          <h3 className="text-2xl font-bold text-secondary text-left">
            {job?.company_name}
          </h3>
        </div>
        <div className="card-body text-left gap-10 p-2">
          <h2 className="card-title">
            {job?.job_title}
            <div className="badge badge-secondary">{job?.job_type}</div>
          </h2>
          <p>{job?.job_description}</p>
          <div className="card-actions justify-start">
            {job?.requirements.map(
              ((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
            )}
          </div>
        </div>
      </Link>
    );
};

export default SingleJobCard;