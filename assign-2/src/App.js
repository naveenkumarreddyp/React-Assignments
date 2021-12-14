
import './App.css';


const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={employee.profileImg} className="photo" alt="profile_photo"/>
        <div className="employeeData">
          <div className="name">{employee.name}</div>
          <div className="locationName">Location</div>
          <div className="location">{employee.location}</div>
          <div className="bloodGroupName">Blood Group</div>
          <div className="bloodGroup">{employee.bloodGroup}</div>
          <div className="ageName">Age</div>
          <div className="age">{employee.age}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
