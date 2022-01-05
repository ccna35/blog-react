import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div className="container">
        <h2>Page not found 404!</h2>
        <Link to="/">Go Back to the homepage...</Link>
      </div>
    </div>
  );
}

export default NotFound;
