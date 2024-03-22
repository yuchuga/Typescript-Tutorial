import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import PersonList from './components/PersonList';
import Status from './components/Status';
import { nameList } from './constants';

// const buttonClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
//   console.log('Button Clicked', e, id)
// };

function App() {
  return (
    <div className="App">
      <Greet name='Yuan Chung' count={10} logIn={false} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder</Heading>
      <Button />
      <Input />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
