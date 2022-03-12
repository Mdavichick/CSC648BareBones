import './App.css';
import {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [pnumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState(0);
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="information">
      <h1>Create User</h1>
      <label>Name</label>
      <input type="text" />
      <label>Phone Number</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Student ID</label>
      <input type="number" />
      <label>Password</label>
      <input type="number" />
      <button>Add User</button>
      </div>
    </div>
  );
}

export default App;
