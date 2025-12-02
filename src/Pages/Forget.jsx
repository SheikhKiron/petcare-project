import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Link, useLocation } from 'react-router';
import { toast } from 'react-toastify';

const Forget = () => {
  const [email, setEmail] = useState('')
  const[error,setError]=useState('')
  const { forget, setLoading } = use(AuthContext)
  const location = useLocation()
  // const navigate = useNavigate()
  
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email)
    }
  },[location.state])
  const handleForget = (e) => {
    e.preventDefault();
    forget(email)
      .then(() => {
        setLoading(false)
        toast.success('Check your email for password reset link (If not found, please check Spam folder)')
        setTimeout(() => {
          window.open('https://mail.google.com/','_blank');
          },1000)
      })
      .catch((err) => {
      setError(err.code)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Forget Password</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Forget Password</h1>
          <form onSubmit={handleForget}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="input w-full"
                placeholder="Email"
              />

              <button className="btn btn-warning text-black mt-4">
                Send Reset code
              </button>
              <Link to="/login" className="btn btn-success text-black mt-4">
                Go Login Page
              </Link>
            </fieldset>
            <div>{error && <p className="text-red-500 text-[17px]">{error}</p>}</div>
          </form>
          <p className='text-[17px] font-semibold text-green-600'>
           N.B: Check your email for password reset link If not found, please check email
            Spam folder
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forget;