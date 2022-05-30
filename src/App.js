import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoCard from './Components/TodoCard';
import Form from './Components/Form';

function App() {
  const initialValue = { title: "", priority: "", brief: "" }

  const [dataValues, setDataValues] = useState([])

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

  const handleDelete = async (_id) => {
    const DuplicateData = [...dataValues];
    const FilteredDatas = DuplicateData.filter(c => c._id !== _id);
    setDataValues(FilteredDatas)
    await axios.delete(`https://guarded-crag-39247.herokuapp.com/api/todo/${_id}`).then(() => console.log("Done"))
  }



  useEffect(() => {
    getData();
  }, [])


  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >


      <div style={{ alignSelf: "center" }} >
        <Form handleChange={handleChange} formValues={formValues} handleSubmit={handleSubmit} />
      </div>
      <div>
        {dataValues.map(d => (
          <TodoCard handleDelete={() => handleDelete(d._id)} priority={d.priority} brief={d.brief} title={d.title} key={d._id} />
        ))}
      </div>

    </div>
  );
}

export default App;
