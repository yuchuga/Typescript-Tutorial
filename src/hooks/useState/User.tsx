import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

const User = () => {
  // useState future value - AuthUser, initial is null
  const [user, setUser] = useState<AuthUser | null>(null) 

  const handleLogin = () => {
    setUser({ name: 'Yuan Chung', email: 'yc@hotmail.com' })
  };

  const handleLogout = () => {
    setUser(null)
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div> 
      <div>User email is {user?.email}</div>
    </>
  )
}

export default User