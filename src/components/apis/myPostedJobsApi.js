import React from 'react';

export const myPostedJobsApi = (email) => {
   return fetch(`http://localhost:3000/jobs?email=${email}`).then(res => res.json())
}
   