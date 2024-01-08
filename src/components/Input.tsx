import { useState } from "react"

// OnChange Event Props
// type InputProps = {
//   value: string
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
// }

const Input = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input 
        type='text' 
        value={value} 
        onChange={handleChange}
      />
      {value}
    </div>
  )
}

export default Input