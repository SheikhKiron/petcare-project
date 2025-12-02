import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
import Spinner from '../Components/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Profile = () => {
  const{user,setUser,updateProfileFun,loading}=use(AuthContext)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);
  const handleUpdate = () => {
    updateProfileFun(name, photo)
      .then(() => {
        setUser({
          ...user,displayName:name ,photoURL:photo
        })
        toast.success('user profile update successfully')
        setEditing(false)
      })
      .catch(err=>toast.error(err.message))
  }
  return (
    <div>
      <title>Profile - Warms Paws User</title>
      {loading ? (
        <Spinner />
      ) : (
        <div className="hero bg-base-200 min-h-screen">
          <div
            className="hero-content flex-col lg:flex-row gap-5"
            data-aos="fade-up"
          >
            <div>
              <img
                src={user.photoURL}
                className="w-[160px] rounded-full shadow-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">{user.displayName}</h1>
              <p className="py-6">{user.email}</p>
              {editing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="text"
                    value={photo}
                    onChange={e => setPhoto(e.target.value)}
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                  <div className="flex gap-2">
                    <button onClick={handleUpdate} className="btn btn-success">
                      Save
                    </button>
                    <button
                      onClick={() => setEditing(false)}
                      className="btn btn-warning text-black"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setEditing(true)}
                  className="btn btn-warning text-black"
                >
                  Update Profile
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;