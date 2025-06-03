import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { alertMessage } from '../../../Utills/alertMessage';

const ViewApplicationsPage = () => {
    const applications = useLoaderData();
    console.log(applications);


    const handleStatusChange = (e, id) => {

        axios.patch(
          `http://localhost:3000/applications/${id}`, {status : e.target.value}
        ).then(res => {
            if(res.data.modifiedCount){
                alertMessage("Status updated successfully.")
            }
        }).catch(error => console.log(error.message))
    }
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-30 py-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, index) => (
                <tr key={application?._id}>
                  <th>{index + 1}</th>
                  <td>{application?.email}</td>
                  <td>{application?.submitedAt}</td>
                  <td>
                    <select onChange={(e) => handleStatusChange(e, application?._id)} defaultValue={application?.status} className="select">
                      <option disabled={true}>Update the status</option>
                      <option>Review</option>
                      <option>Pending</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default ViewApplicationsPage;