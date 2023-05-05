import React, { useState } from 'react'
import './App.css';

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword]= useState("")
  const [list,setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,password);
    const data = {name,email,password}
    if(name && email && password){
      setList((ls)=>[...ls,data]);
      setName("");
      setEmail("");
      setPassword("");
    }
  }
  return (
    <div className="App">
        <h1>Welcome To User Registration Form</h1>
        <form className="input" onSubmit={handleSubmit}>
          <input name='name' placeholder='Name'value={name} onChange={(e)=> setName(e.target.value)}/>
          <input name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input name='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button>Register</button> 
        </form>
            {
              list?.map((a) =><div>
                <li>{a.name}</li>
                <li>{a.email}</li>
                <li>{a.password}</li>
                </div>)
            }
        </div>
  );
}

export default App;
