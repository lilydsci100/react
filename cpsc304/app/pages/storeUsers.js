import UserForm from '../components/UserForm';
import axios from 'axios';

const StoreUserPage = () => {
  const handleSubmit = async (userData) => {
    try {
      const response = await axios.post('/api/storeUser', userData);
      console.log(response.data);
      alert('User information stored successfully!');
    } catch (error) {
      console.error('Error storing user information:', error);
      alert('An error occurred while storing user information');
    }
  };

  return (
    <div>
      <h1>Store User Information</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default StoreUserPage;