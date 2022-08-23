import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import Login from '../components/Login';
import DashboardHome from '../components/DashboardHome';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.uid === '5stTRiRjLYPFAGINNrh3I0I4W1R2') {
          setUser(user);
          setError(null);
        } else {
          setUser(null);
          setError('Not Allowes');
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      {error && <p>Not Allowed</p>}
      {!user ? <Login /> : <DashboardHome user={user} />}
    </div>
  );
};

export default Dashboard;
