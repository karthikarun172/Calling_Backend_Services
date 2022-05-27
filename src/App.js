import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoCard from './Components/TodoCard';

function App() {
  const initialValue = { title: "", priority: "", brief: "" }

  const [dataValues, setDataValues] = useState([])
  const [sendData, setSendData] = useState()

  const [formValues, setFormValues] = useState(initialValue)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }



  const getData = async () => {
    const post = await axios.get("https://guarded-crag-39247.herokuapp.com/api/todo")
    setDataValues(post.data)
    console.log(post.data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("https://guarded-crag-39247.herokuapp.com/api/todo", formValues).then(() => console.log("done"))

  }



  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="App">


      <h2>helo</h2>
      {dataValues.map(d => (
        <TodoCard priority={d.priority} brief={d.brief} title={d.title} key={d._id} />
      ))}
      <div>
        <form onSubmit={handleSubmit} >
          <input placeholder='Title' onChange={handleChange} value={formValues.title} name="title"  ></input>
          <input placeholder='Priority' onChange={handleChange} value={formValues.priority} name="priority"   ></input>
          <input placeholder='Brief' onChange={handleChange} value={formValues.brief} name="brief" ></input>
          <button type='submit' >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
