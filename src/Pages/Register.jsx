import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Register = () => {
  const [error, setError] = useState('')
  const [showPass,setShowPass]=useState(false)
  const {
    signUp,
    verify,
    googleSignIn,
    setLoading,
    updateProfileFun,
  } = use(AuthContext);
  const navigate=useNavigate()
  const handleSignUp = (e) => {
    e.preventDefault()
    setError('')
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const isValid = /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6; 
    if (!isValid) {
      setError(
        'Password must be at least 6 characters long, and include at least one uppercase and one lowercase letters.'
      );
      return
    }
    // console.log('clicked', displayName, photoURL, email, password);
    signUp(email, password)
      .then(result => {
        updateProfileFun(displayName,photoURL)
        setLoading(false)
        verify(result.user)
          .then(() => {
         setLoading(false);
          })
          .catch(err => setError(err.message))
        // if (!result.user.emailVerified) {
        //  toast.info('Verification email sent! Please check your inbox.');
        //   return
        // }
          // console.log(result.user);
        toast.success(
          'Signup successful. Check your email to validate your account.'
        );
        // setUser(null)
        navigate('/')
        e.target.reset()
      })
      .catch(err => {
        // console.log(err);
        setError(err.code)
    })
  }

  const handleGoogle = (e) => {
      e.preventDefault()
      googleSignIn()
        .then(() => {
          setLoading(false);
          toast.success('Login Successfully')
           navigate('/');
        })
        .catch(err => {
        setError(err.message)
      })
    }

  const eyeHandle = () => {
   setShowPass(!showPass)
  }

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign Up for Warm-Paws</title>
      <div
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
        data-aos="zoom-in-down"
      >
        <div className="card-body">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              {/* name  */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                required
                className="input"
                placeholder="Name"
              />
              {/* photourl  */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                required
                name="photoURL"
                className="input"
                placeholder="Photo URL"
              />
              {/* email  */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <span
                  className="absolute top-3 right-8 text-[17px]"
                  onClick={eyeHandle}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <button className="btn mt-4 btn-warning text-black">
                Register
              </button>
              <p className="text-center py-2">Or</p>
              {/* Google */}
              <button
                className="btn bg-white text-black border-[#e5e5e5]"
                onClick={handleGoogle}
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
            <p className="text-[16px] font-semibold mt-3">
              Already have an account ? Please{' '}
              <Link to="/login" className="underline text-blue-700">
                Login
              </Link>
            </p>
            <div className="text-red-500 py-3.5">{error && <p>{error}</p>}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;