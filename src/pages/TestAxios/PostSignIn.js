import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://47.129.231.55/auth/profile/', {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1NjM3NzcyLCJpYXQiOjE3MjU2MzU5NzIsImp0aSI6ImUzNmJmOGNkN2E4MjRhMGFiYmJlMzMyM2VmMGJjNWU0IiwidXNlcl9pZCI6MTI2fQ.xFuB5-bB5u3KAGlHRGM0gDiKZWQt2uAI85xoBna_tCs`
          }
        });
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch profile');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <p><strong>Full Name:</strong> {profile.full_name}</p>
          <p><strong>Gender:</strong> {profile.gender ? 'Male' : 'Female'}</p>
          <p><strong>Phone Number:</strong> {profile.phone_number}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;