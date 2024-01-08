import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

const User2 = () => {
  // useState Type Assertion 
  const [user, setUser] = useState<AuthUser>({} as AuthUser) 

  const handleLogin = () => {
    setUser({ name: 'Yuan Chung', email: 'yc@hotmail.com' })
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div> 
      <div>User email is {user.email}</div>
    </>
  )
}

export default User2