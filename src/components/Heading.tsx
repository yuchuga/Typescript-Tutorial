type HeadingProps = {
  children: string //children refers to content within a JSX tag i.e. Placeholder
}

// Destructure Props 
const Heading = ({ children }: HeadingProps) => {
  return (
    <h2>{children}</h2>
  )
}

export default Heading