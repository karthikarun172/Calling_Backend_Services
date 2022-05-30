import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoCard from './Components/TodoCard';
import Form from './Components/Form';

function App() {
  const initialValue = { title: "", priority: "", brief: "" }

  const [dataValues, setDataValues] = useState([])
  const [updateBTN, setUpdateBTN] = useState(true)
  const [formValues, setFormValues] = useState(initialValue)
  const [UpdateID, setUpdateID] = useState(null)

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
    await axios.post("https://guarded-crag-39247.herokuapp.com/api/todo", formValues).then(() => console.log("post done"))
    setFormValues(initialValue)
  }

  const handleDelete = async (_id) => {
    const DuplicateData = [...dataValues];
    const FilteredDatas = DuplicateData.filter(c => c._id !== _id);
    setDataValues(FilteredDatas)
    await axios.delete(`https://guarded-crag-39247.herokuapp.com/api/todo/${_id}`).then(() => console.log("Done"))
  }


  const handleUpdateSelect = (_id) => {
    const SelectedData = dataValues.find(c => c._id === _id)
    const UpdatedValue = {
      title: SelectedData.title, priority: SelectedData.priority, brief: SelectedData.brief
    }
    setUpdateID(_id)
    setUpdateBTN(false)
    setFormValues(UpdatedValue)
  }

  const handleUpdate = async (e) => {

    e.preventDefault();
    await axios.put(`https://guarded-crag-39247.herokuapp.com/api/todo/${UpdateID}`, formValues).then(() => setFormValues(initialValue)).then(() => console.log("Update Done"))

  }



  useEffect(() => {
    getData();
  }, [dataValues])


  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >


      <div style={{ alignSelf: "center" }} >
        <Form updateBTN={updateBTN} handleChange={handleChange} handleUpdate={handleUpdate} formValues={formValues} handleSubmit={handleSubmit} />
      </div>

      <div>
        {dataValues.map(d => (
          <TodoCard handleUpdate={() => handleUpdateSelect(d._id)} handleDelete={() => handleDelete(d._id)} priority={d.priority} brief={d.brief} title={d.title} key={d._id} />
        ))}
      </div>

    </div>
  );
}

export default App;
