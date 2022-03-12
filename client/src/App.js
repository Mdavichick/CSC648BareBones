import './App.css';
import {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [pnumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState(0);
  const [password, setPassword] = useState("");

  const displayInfo = () => {
    console.log(name + pnumber + email + id + password);
  };
  
  return (
    <div className="App">
      <div className="information">
        <h1>Create User</h1>
          <label>Name</label>
          <input type="text" 
            onChange={(event) => {setName(event.target.value);}}/>
          <label>Phone Number</label>
          <input type="text" 
            onChange={(event) => {setPhone(event.target.value);}}/>
          <label>Email</label>
          <input type="email" 
            onChange={(event) => {setEmail(event.target.value);}}/>
          <label>Student ID</label>
          <input type="number" 
            onChange={(event) => {setID(event.target.value);}}/>
          <label>Password</label>
          <input type="text"
            onChange={(event) => {setPassword(event.target.value);}}/>
          <button onClick={displayInfo}>Add User</button>
      </div>
    </div>
  );
}

export default App;
