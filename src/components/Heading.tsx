type HeadingProps = {
  children: string //children refers to content within a JSX tag i.e. Placeholder
}

const Heading = (props: HeadingProps) => {
  return (
    <h2>{props.children}</h2>
  )
}

export default Heading