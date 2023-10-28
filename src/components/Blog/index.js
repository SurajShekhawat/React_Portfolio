import React from 'react';
import './Blog.css';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Blog = () => {

  return (
    <div id='Blog'>
      <h2>Latest Posts</h2>

      <div className="Blog_container">
      <div className="card_group" >

        {/* <Link to="/AiFusion" target='_blank' > */}
        <div className="card" >
          <div className="Blog_img">
          <img src="" alt="" />
          </div>
          <div className="Detail_div">
            <h3>AI in Action: Transforming Industries with Machine Learning</h3>
            <p>In the era of rapid technological advancement, Artificial Intelligence (AI) and Machine Learning (ML) have emerged as game-changers across various industries.</p>
            {/* <button>Read More</button> */}
          </div>
          <div className="author">
            <img src="https://drive.google.com/uc?export=view&id=1OHecdr8bKYoADiXeUnPTCLC5-mkvNvdM" alt="Suraj Img"/>
            <h5>Suraj Singh Shekhawat</h5>
          </div>
        </div>
        {/* </Link> */}

        <div className="card" >
          <div className="Blog_img">
          <img src="" alt="" />
          </div>
          <div className="Detail_div">
            <h3>AI in Action: Transforming Industries with Machine Learning</h3>
            <p>In the era of rapid technological advancement, Artificial Intelligence (AI) and Machine Learning (ML) have emerged as game-changers across various industries.</p>
            {/* <button>Read More</button> */}
          </div>
          <div className="author">
            <img src="https://drive.google.com/uc?export=view&id=1OHecdr8bKYoADiXeUnPTCLC5-mkvNvdM" alt="Suraj Img"/>
            <h5>Suraj Singh Shekhawat</h5>
          </div>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Blog
