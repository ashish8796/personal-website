import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); 

  useEffect(() => {
    fetch('data/blogs.json')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
      })
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blogs</h2>
      </header>
      <div className="blog-posts">
        <ul className="blog-posts-list">
          {currentPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              slug={post.slug}
              category={post.category}
              date={post.date}
              description={post.description}
            />
          ))}
        </ul>
      </div>
      
      <nav>
        <ul className="blog-pagination">
          <li className={`blog-page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage - 1)} className="blog-page-link" disabled={currentPage <= 1}>
              Previous
            </button>
          </li>
          {Array.from({ length: Math.ceil(blogs.length / postsPerPage) }, (_, index) => (
            <li key={index} className={`blog-page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="blog-page-link">
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`blog-page-item ${currentPage === Math.ceil(blogs.length / postsPerPage) ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage + 1)} className="blog-page-link" disabled={currentPage === Math.ceil(blogs.length / postsPerPage)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Blogs;
