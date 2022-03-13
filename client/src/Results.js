import './App.css';
import React from "react";
import {useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

function Results() {
    return (
        <div className="App">
        <Link to ="/"><button>Create User</button></Link>
        <div className="information">
         <h1>Testing</h1>
         <button>WERE ON PAGE 2</button>
     </div>
     </div>
    );
  }

  export default Results;