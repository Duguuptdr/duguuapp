import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [userId1, setUserId1] = useState("");
  const [password1, setPassword1] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Save credentials to localStorage
    localStorage.setItem("userId", userId);
    localStorage.setItem("password", password);

    alert("Login Successful!");
    navigate("/Home")
  };
  // useEffect(() => {
  //   // Retrieve credentials from localStorage
  //   const storedUserId = localStorage.getItem("userId");
  //   const storedPassword = localStorage.getItem("password");

  //   if (storedUserId && storedPassword) {
  //     setUserId1(storedUserId);
  //     setPassword1(storedPassword);
  //   }
  // }, []);
  return (<>
<section className="LoginSection">
    <div className="loginPageSS">
        <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="inputbox-SU">
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-SUMbit" type="submit">Login</button>
      </form>
      {/* <div style={{ textAlign: "center",  }}>
      <h2>Welcome, {userId1}!</h2>
      <p>Your stored password: {password1}</p>
    </div> */}
    </div></div></section></>
  );
};

export default Login;