import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h3>Opps ! try again !!</h3>
      <p> {error.statusText || error.message} </p>

    </div>
  );
};

export default ErrorPage;