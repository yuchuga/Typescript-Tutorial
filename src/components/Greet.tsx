//type props
type GreetProps = {
  name: string
  count: number
  logIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.logIn 
        ? <h2>Welcome {props.name}! You have {props.count} messages</h2>
        : <h2>Welcome Guest!</h2>
      }
    </div>
  )
}

export default Greet