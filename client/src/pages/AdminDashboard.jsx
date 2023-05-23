import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import ProjectsList from '../components/ProjectsList';
import { auth } from '../firebase/auth'; // make sure to import your initialized firebase auth object

const AdminDashboard = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
  
    // perform cleanup
    return () => unsubscribe();
  }, []); // empty dependency array
  

  return (
    <div className="pt-[120px] bg-cover bg-slate-800">
      <Navbar />
      <div className="w-screen h-screen">
        <ProjectsList userId={userId} />
      </div>
    </div>
  )
};

export default AdminDashboard;
