import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
  const post = useLoaderData();
  const Navigate = useNavigate();
  const { id, title, body } = post;

  const handleGoback = () => {
    Navigate(-1);

  }

  return (
    <div>
      <h3>Post Details About: </h3>
      <p>Title: {title} </p>
      <p> <small>{body} </small> </p>
      <button onClick={handleGoback} >Go Back</button>
    </div>
  );
};

export default PostDetails;