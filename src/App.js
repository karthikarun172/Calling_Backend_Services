import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [dataValues, setDataValues] = useState([])


  console.log("done");
  const getData = async () => {
    const post = await axios.get("https://jsonplaceholder.typicode.com/todos")
    setDataValues(post.data)
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="App">
      <h2>helo</h2>
      {dataValues.map(d => (
        <p key={d.id} >{d.title}</p>
      ))}
    </div>
  );
}

export default App;
