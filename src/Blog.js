import React from "react";
import "./Css Style/About.css";
import blog1 from "./img/blog1.jpg";
import blog2 from "./img/blog2.jpg";
import blog3 from "./img/blog3.jpg";
import blog4 from "./img/blog4.jpg";
import blog5 from "./img/blog5.jpg";
import blog6 from "./img/blog6.jpg";

export default function Blog() {
  return (
    <>
      <div className="blog-cont">
        <div className="ab-grid df">
          <div className="blog-img">
            <img src={blog1} alt="image" />
            <p>Maximus auctor sit</p>
            <span>Read more...</span>
          </div>
          <div className="blog-img">
            <img src={blog2} alt="image" />
            <p>Maximus auctor sit</p>
            <span>Read more...</span>
          </div>
          <div className="blog-img">
            <img src={blog3} alt="image" />
            <p>Maximus auctor sit</p>
            <span>Read more...</span>
          </div>
          <div className="blog-img">
            <img src={blog4} alt="image" />
            <p>Maximus auctor sit</p>
            <span>Read more...</span>
          </div>
          <div className="blog-img">
            <img src={blog5} alt="image" />
            <p>Maximus auctor sit</p>
            <span>Read more...</span>
          </div>
          <div className="blog-img">
            <img src={blog6} alt="image" />
            <p>Mauros dan cosmo iriure dolor</p>
            <span>Read more...</span>
          </div>
        </div>
      </div>
    </>
  );
}
