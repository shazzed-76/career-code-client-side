export const myApplicationPromise = email => {
       return fetch(`http://localhost:3000/application/my?email=${email}`).then(
     (res) => res.json()
   );
}