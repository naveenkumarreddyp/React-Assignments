import React, {useState, useEffect} from 'react';
import './Postview.css';
import icon from '../images/icon.png';
import camera from '../images/camera.png';
import like from '../images/heart.png';
import share from '../images/send.png';


const Postview=()=> {
  const [users,userData]=useState([])
  const getApiData = async () =>{
    const UrL = 'http://localhost:3000/data'
    let response = await fetch(UrL)
    let users = await response.json()
    userData(users)
  };
  useEffect(()=>{getApiData()},[])
    
  return (
    <div className="site-container">
      <div className='heading'>
        <img className='icon' src={icon} alt='icon'/>
        <h1>Insta Clone</h1>
        <img className='camera' src={camera} alt='camera'/>
      </div>
      <div className="body">
        {users && users.map((user)=>(
          <div className='post'>
            <div className='top'>
              <div className='namelocation'>
                <div className='name'>{user.name}</div>
                <div className='location'>{user.location}</div>
              </div>
              <div className='dots'>...</div>
            </div>
            <img className='postimage' src={user.PostImage} alt="post" />
            <div className='bottom'>
              <div className='buttons'>
                <img className='like' src={like} alt='like'/> 
                <img className='share' src={share} alt='share'/>
                <div className='date'>{user.date}</div>
              </div>
              <div className='likes'>{user.likes} likes</div>
              <div className='description'>{user.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Postview;
