import React, { use } from 'react';

const MyApplicationRaw = ({ application, index }) => {
    console.log(application)
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{application?.applicantName}</td>
      <td>{application?.job_title}</td>
      <td>{application?.company_name}</td>
      <td>{application?.location}</td>
      <td>
        <button className="btn btn-xs capitalize">withdraw</button>
      </td>
    </tr>
  );
};

export default MyApplicationRaw;