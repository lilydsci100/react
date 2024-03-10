import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getUserById } from '../utils/dbFunctions';

const UserInfoPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      getUserInfo(userId);
    }
  }, [userId]);

  const getUserInfo = async (userId) => {
    try {
      const userData = await getUserById(userId);
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  return (
    <div>
      <h1>User Information Page</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Daily Usage Time: {user.daily_usage_time}</p>
          <p>Content Preference: {user.content_preference}</p>
          {/* Add more user information here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfoPage;