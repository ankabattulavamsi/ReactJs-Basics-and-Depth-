import React from "react";
import { useRouteError } from "react-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Something is happened</h1>
    </div>
  );
};

export default Error;
