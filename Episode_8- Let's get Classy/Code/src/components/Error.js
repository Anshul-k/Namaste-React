import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="Error">
      <h1>Ooops !!!</h1>
      <h2>There was an error</h2>
      <h3>
        {error.status}:{error.statusText}
      </h3>
    </div>
  );
};

export default Error;
