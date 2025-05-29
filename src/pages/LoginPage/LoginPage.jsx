import Lottie from 'lottie-react';
import React, { useState } from 'react';
import lottieAnimation from '../../assets/image/lottie-files/registration-animation.json'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import SocialLogInBtn from '../../components/SocialLogInBtn/SocialLogInBtn';
import useAuth from '../../Hooks/useAuth';
import { alertMessage } from '../../Utills/alertMessage';
import { useNavigate } from 'react-router';

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const { singInUser } = useAuth();
    const navigate = useNavigate();

    const handleLogInForm = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password =form.password.value;

        singInUser(email, password)
        .then(result => {
            const loggedInUser = result.user;
            if(loggedInUser){
                alertMessage('logged in successfully.')
            }
            navigate('/')
        }).catch(error => {
            console.log(error)
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
              <h1 className="text-3xl font-bold">Login now!</h1>
              <form onSubmit={handleLogInForm} className="fieldset">
               
               
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
                <button className="btn btn-primary mt-4">Log in</button>
              </form>
              <SocialLogInBtn content="Sign in with Google" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default LoginPage;