import React, { use } from 'react';
import SingleJobCard from '../SingleJobCard/SingleJobCard';

const JobCardContainer = ({ AllJobsPromise }) => {
  const jobs = use(AllJobsPromise);
  console.log(jobs);
  return <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {
        jobs.map(job => <SingleJobCard job={job} /> )
    }
  </div>;
};

export default JobCardContainer;