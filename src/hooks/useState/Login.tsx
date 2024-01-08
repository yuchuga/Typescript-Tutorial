import { useState } from 'react';

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(false) // typescript infer datatype

  const handleLogin = () => {
    setIsLogIn(true)
  };

  const handleLogout = () => {
    setIsLogIn(false)
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLogIn ? 'logged in' : 'logged out'}</div>
    </>
  )
}

export default Login