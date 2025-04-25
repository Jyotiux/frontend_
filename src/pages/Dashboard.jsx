import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="container mt-5 pt-5">
      <h2>Welcome {user?.email || "User"}!</h2>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
