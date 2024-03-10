import PostForm from '../components/PostForm';
import axios from 'axios';

const StorePostPage = () => {
  const handleSubmit = async (postData) => {
    try {
      const response = await axios.post('/api/storePost', postData);
      console.log(response.data);
      alert('Post information stored successfully!');
    } catch (error) {
      console.error('Error storing post information:', error);
      alert('An error occurred while storing post information');
    }
  };

  return (
    <div>
      <h1>Store Post Information</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default StorePostPage;