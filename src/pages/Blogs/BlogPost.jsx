import React from "react";
import { useNavigate} from "react-router-dom";

const BlogPost = ({ title,slug, category, date, description }) => {
    const navigate = useNavigate();
    const handleNavigate = (e)=>{
       e.preventDefault();
       navigate(`/blogs/${slug}`)
    }

  return (
    <li 
      onClick={handleNavigate}
      className="blog-post-item">
      <a href="#" >
        <div className="blog-content">
          <h4 className="h4 blog-item-title">{title}</h4>
          <p className="blog-text">{description}</p>
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            <time dateTime={date}>{date}</time>
          </div>
        </div>
      </a>
    </li>
  )
}

export default BlogPost;
