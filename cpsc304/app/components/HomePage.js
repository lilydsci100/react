import { useState } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const [userId, setUserId] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/user/${userId}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default HomePage;