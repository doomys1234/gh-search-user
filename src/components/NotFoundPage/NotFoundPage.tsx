import React from "react";
import "./NotFoundPage.scss";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-heading">Oops, such user does not exist</h2>
      <p className="not-found-text">Try a different login</p>
    </div>
  );
};

export default NotFoundPage;
