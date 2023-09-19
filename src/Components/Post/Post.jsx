
import { Link, Navigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {
  const { id, title } = post;

  const handleShowDetail = () => {
    Navigate(`/post/${id}`);
  }

  return (
    <div className="post" >
      <h2> {id} </h2>
      <h4> {title} </h4>
      <Link to={`/post/${id} `} >Post Details: </Link>
      <Link to={`/post/${id}`} ><button>Show Details</button></Link>
      <button onClick={handleShowDetail} >Site Maker</button>
    </div>
  );
};

export default Post;