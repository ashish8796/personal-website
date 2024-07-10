import React,{useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io";
import MarkdownRenderer from './MarkdownRenderer';

const Blog = ()=>{
     const [blog, setBlog] = useState('');
     const params = useParams();
     const navigate = useNavigate();

    useEffect(()=>{
         axios.get(`/blogs/${params?.id}.md`)
         .then(res=> res.data)
         .then(data=>  setBlog(data))
         .catch(error=> console.error(error))
    }, [])


    const handleBack = ()=>{
         navigate('/blogs')
    }

  return (
    <section
      className='blog-read'
       style={{color:"white"}}>
        <span 
          onClick={handleBack}
          className='back-icon'>
          <IoIosArrowBack/>
        </span>
      <MarkdownRenderer markdown={blog}/>
     </section>
  )
}

export default Blog;