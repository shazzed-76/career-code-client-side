import React, { use } from 'react';
import WithdrawBtn from '../WithdrawBtn/WithdrawBtn';

const MyApplicationRaw = ({ application, index, handleWithdraw }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{application?.applicantName}</td>
      <td>{application?.job_title}</td>
      <td>{application?.company_name}</td>
      <td>{application?.location}</td>
      <td onClick={() => handleWithdraw(application?._id)}>
        <WithdrawBtn id={application._id} />
      </td>
    </tr>
  );
};

export default MyApplicationRaw;