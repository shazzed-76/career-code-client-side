import React, { use, useEffect, useState } from 'react';
import MyApplicationRaw from '../MyApplicationRaw/MyApplicationRaw';

const MyApplicationList = ({myApplicationPromise}) => {
   
    const myApplications = use(myApplicationPromise);
        
  

    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myApplications.map((application, index) => (
            <MyApplicationRaw key={application._id}  index={index} application={application} />
          ))}
        </tbody>
      </table>
    );
};

export default MyApplicationList;