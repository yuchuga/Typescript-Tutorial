// OnClick Event Props
// type ButtonProps = {
//   handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
// }

const Button = () => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('Button Clicked', e.target, id)
  };

  return (
    <button onClick={(e) => handleClick(e, 1)}>Click</button>
  )
}

export default Button