import React from "react";
import "./PageNotFound.scss";
import NotImage from "../../Assets/image/404-banner.jpg";

const PageNotFound = () => {
  return (
    <div className="page-nt-fd">
      <div className="page-inner">
        <img src={NotImage} alt="page-not-fonund" />
      </div>
    </div>
  );
};

export default PageNotFound;
