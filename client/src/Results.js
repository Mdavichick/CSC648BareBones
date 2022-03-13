import './App.css';
import React from "react";
import {useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

function Results() {

    // store all db results within a list
    const [userList, setUserList] = useState([]);

    const getUsers = () => {
        Axios.get('http://localhost:3001/users').then((response) => {
            setUserList(response.data);
          });
    };

    return (
    <div className="App">
        <Link to ="/"><button>Create User</button></Link>

        <div className="results">
         <h1>Results</h1>
         <button onClick={getUsers}>Show Users</button>

         {userList.map((val, key) => {
             return <div className="user">
                 <h3>Name:<br/> {val.name}</h3>
                 <h3>ID:<br/> {val.userid}</h3>
                 <h3>Phone:<br/> {val.phone}</h3>
                 <h3>Email:<br/> {val.email}</h3>
                 </div>
         })}
        </div>
     </div>
    );
  }

  export default Results;