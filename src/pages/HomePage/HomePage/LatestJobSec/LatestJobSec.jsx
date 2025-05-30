import React, { use } from 'react';
import SingleJobCard from '../../../../components/SingleJobCard/SingleJobCard';



const LatestJobSec = ({jobPromise}) => {
    const jobs = use(jobPromise);
    console.log(jobs)
    return (
      <div className="max-w-7xl mx-auto px-5 text-center py-20">
        <h1 className="text-5xl font-semibold text-secondary">
          Latest Job Post
        </h1>
        <p className="text-lg font-semibold text-accent py-5">
            See latest job and apply as your comfort.
        </p>
        <div className="grid gird-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                jobs.map(job => (
                    <SingleJobCard key={job?._id} job={job}/>
                ))
            }
        </div>
      </div>
    );
};

export default LatestJobSec;