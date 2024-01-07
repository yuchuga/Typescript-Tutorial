// OnChange Event Props
type InputProps = {
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
  return (
    <input 
      type='text' 
      value={props.value} 
      onChange={props.handleChange}
    />
  )
}

export default Input