import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <div>Detalis about users</div>
      <h2> {name} </h2>
      <p> Website: {website} </p>
    </div>
  );
};

export default UserDetails;