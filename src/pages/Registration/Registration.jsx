import React, { useState } from 'react';
import './Registration.css'
import lottieAnimation from '../../assets/image/lottie-files/registration-animation.json'
import Lottie from 'lottie-react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useNavigate } from 'react-router';
import SocialLogInBtn from '../../components/SocialLogInBtn/SocialLogInBtn';

const Registration = () => {
    const { createUser, updateUserInfo } = useAuth();
    const [ show, setShow ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('')
    const navigate = useNavigate();

    const handleRegistrationForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, userName, photoUrl} = Object.fromEntries(formData.entries());
        setErrorMessage('')
        //validate the user password
        if(password.length < 6) {
            return setErrorMessage('Password must be at least 6 characters long.')
        }
        else if(!/[A-Z]/.test(password)){
            return setErrorMessage('Passwornd must contain at least one uppercase.')
        }
        else if(!/[a-z]/.test(password)){
            return setErrorMessage('Password must contain at least one lowercase.')
        }

        //create account in firebase
        createUser(email, password)
        .then(result => {
            const newUser = result.user;
            setErrorMessage('')
            if(newUser){
                //updated the user profile
                updateUserInfo({ displayName: userName, photoURL: photoUrl })
                .then(() => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Your account has been created",
                      showConfirmButton: false,
                      timer: 1500,
                    });

                    navigate('/')
                })
                .catch(error => {
                    console.log(error.message)
                })
            }
        })
        .catch(error => {
           if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "Your account already exist",
              showConfirmButton: false,
              timer: 1500,
            });
           }
        })
    }
    return (
      <section className="hero bg-base-200 min-h-screen px-5">
        <div className="hero-conten w-full max-w-7xl flex flex-col lg:flex-row-reverse mx-auto justify-center items-center">
          <div className="text-center lg:text-left">
            <Lottie
              className="max-w-md"
              animationData={lottieAnimation}
              loop={true}
              autoplay={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full h-fit max-w-sm shrink-0 shadow-2xl">
            <div className="card-body ">
              <h1 className="text-3xl font-bold">Register now!</h1>
              <form onSubmit={handleRegistrationForm} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="userName"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Photo URL</label>
                <input
                  type="url"
                  name="photoUrl"
                  className="input"
                  placeholder="Photo URL"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <span
                    className="text-sm font-semibold btn btn-xs bg-transparent border-0 absolute top-2 right-5 z-50"
                    onClick={() => setShow((prev) => !prev)}
                  >
                    {show ? <VscEye size={15} /> : <VscEyeClosed size={15} />}
                  </span>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm font-normal">{errorMessage}</p>
                )}
                <button className="btn btn-primary mt-4">Register</button>
              </form>
              <SocialLogInBtn content="Sign up with Google" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Registration;