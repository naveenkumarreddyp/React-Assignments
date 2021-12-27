import React from 'react';

import './App.css';

const employee = {
  name: 'Alan Ford',
  id: '2020205152',
  Appointment: '9:00(17-12-2021)',
  email: 'alan.ford@gmail.com',
  phone: '+91-9988776655',
  status: 'In Progress',
  location: 'Head-Office, Bengaluru',
  time: '10:30(18-12-2021)',
  designation: 'Full Stack Developer',
  company: 'Software Inc, Bengaluru, KA, India.',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

function App() {
  return (
    <div className="site-container">
      <div className='details'>
        <div className='navigation1'>&lt;</div>
        <div className='nameid'>
          <div className='employeeName'>{employee.name}</div>
          <div className='employeeid'>{employee.id}</div>
        </div>
        <div className='button'>
          <button className='print'>Print</button>
        </div>
      </div>
      <div className='customer-info'>
        <div className='appointment'>Appointment on : {employee.Appointment}</div>
        <div className='email'>Email : {employee.email}</div>
        <div className='phone'> Phone : {employee.phone}</div>
      </div>
      <div className='order-info'>
        <div className="orderNames">
          <h4>Status</h4>
          <h4>Location</h4>
          <h4>Time</h4>
        </div>
        <div className="orderVaules">
          <h3>&bull;{employee.status}</h3>
          <h3>{employee.location}</h3>
          <h3>{employee.time}</h3>
        </div>
      </div>
      <div className='product-list'>
        <div class="square"></div>
        <img src={employee.profileImg} className="photo" alt="profile_photo"/>
        <div className='designation'>
          <h2>{employee.designation}</h2>
          <h3>{employee.company}</h3>
        </div>
        <div className='navigation2'>&gt;</div>
      </div>
    </div>
  );
}

export default App;