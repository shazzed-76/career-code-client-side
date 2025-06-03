import React, { use } from 'react';
import { useNavigate } from 'react-router';

const MyJobPostList = ({ myPostedJobsApi }) => {
  const navigate = useNavigate();
  const jobs = use(myPostedJobsApi)
 
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>company</th>
            <th>Job</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
         {
            jobs.map((job, index) => {
              return  (
                <tr>
                  <td>{index + 1}</td>
                  <td>{job?.company}</td>
                  <td>{job?.title}</td>
                  <td>
                    <button
                        onClick={() => navigate(`/application/${job?._id}`)}
                        className='btn capitalize'
                    >
                        view applications
                    </button>
                  </td>
                </tr>
              )
            })
         }
        </tbody>
      </table>
    </div>
  );
};

export default MyJobPostList;