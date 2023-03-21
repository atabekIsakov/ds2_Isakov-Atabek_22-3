import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import List from './components/List/List';
import Input from './components/Input/Input';
function App() {
  const [ show, setShow ] = useState(false)
  const [search, setSearch] = useState('')
  const handleShow  = () => setShow(!show)
  const handleSearch = (value) => {
    setSearch(value)
    console.log(search, 'search');
  }

  const tasks = [
    {
      id:1 , 
      task: 'coding'
    },
    {
      id:2,
      task: 'eat'
    },
    {
      id:3,
      task: 'sleep'
    }
  ]

  return (
    <div className="App">
      <div>
        <Input 
          name='search'
          placeholder='искать таск'
          change={(e) => handleSearch(e.target.value)}
        />
      </div>
      {show && <Modal 
      handleShow={handleShow}  />}
      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>
      <List tasks={tasks}/>
    </div>
  );
}

export default App;
