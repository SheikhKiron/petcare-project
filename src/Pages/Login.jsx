import React, { use, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const[email,setEmail]=useState('')
  const emailRef = useRef();
  const location = useLocation();
  const [error, setError] = useState('');
  const from = location.state || '/';
  const navigate = useNavigate();
  const { signIn, googleSignIn, user, setLoading } = use(AuthContext);
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError('');
    signIn(email, password)
      .then(result => {
        setLoading(false);
        // if (!result.user.emailVerified) {
        //   toast('Please Verify your email');
        //   return;
        // }
        // console.log(result.user);
        toast.success('login Succefully');
        navigate(from);
      })
      .catch(err => {
        setError(err.code);
      });
  };

  const handleGoogle = e => {
    e.preventDefault();
    googleSignIn()
      .then(() => {
        setLoading(false);
        toast.success('Login Successfully');
        navigate(from);
      })
      .catch(err => {
        setError(err.message);
      });
  };


  const eyeHandle = () => {
    setShowPass(!showPass);
  };

  useEffect(() => {
    if (user) {
      navigate(from);
      return;
    }
  }, [user, navigate, from])

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);
  
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign in for Warm-Paws</title>
      <div
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
        data-aos="zoom-in-down"
      >
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                ref={emailRef}
                className="input"
                placeholder="Email"
              />
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

              <div>
                <Link
                  to="/forget"
                  className="link link-hover text-[17px] pt-2.5"
                  state={{ email }}
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn btn-warning text-black mt-4">Login</button>
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
              Don't have an account ? Please{' '}
              <Link to="/register" className="underline text-blue-700">
                Sign Up
              </Link>
            </p>
            <div className="text-red-500 text-[18px] py-3.5">
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
