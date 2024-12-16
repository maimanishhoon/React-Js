import React, { useState, useContext } from "react";
import UserContext from "../../Context/Usercontext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] =useState('')

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    if(!password ){
        alert("Enter The Password ")
    }

    e.preventDefault()
    setUser({username, password, key})
    
    setUsername("")
    setPassword("")
  };
   
  //This is For Key
  const handlekey = (e) =>{
    e.preventDefault
    setUser({key})
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
        {"        "}
      <input
        value={password}
        type="Password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"

      />
      {" "}
      <input
       type="Number"
       value={key}
       placeholder="Set Your Key"
       onChange={(e) => setKey(e.target.value)}
       />
       
      <button  onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Login;
