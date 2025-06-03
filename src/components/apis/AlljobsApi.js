export const AllJobsPromise = () => {
   return fetch("http://localhost:3000/jobs").then((res) => res.json());
}