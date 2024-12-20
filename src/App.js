import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
        setLoading(false);
      } catch (err) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
