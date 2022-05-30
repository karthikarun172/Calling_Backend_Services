import React from 'react'

function Form({ handleChange, formValues, handleSubmit, handleUpdate, updateBTN }) {
    return (
        <div style={{ height: "200px", width: "350px" }} >
            <form style={{ display: "flex", flexDirection: "column" }} >
                <input placeholder='Title' onChange={handleChange} value={formValues.title} name="title"  ></input>
                <input placeholder='Priority' onChange={handleChange} value={formValues.priority} name="priority"   ></input>
                <input placeholder='Brief' onChange={handleChange} value={formValues.brief} name="brief" ></input>
                <div style={{ width: "350px", display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "10px" }} >
                    <button type='submit' onClick={handleSubmit} >Submit</button>
                    <button disabled={updateBTN} type='submit' onClick={handleUpdate} >Update</button>
                </div>
            </form>
        </div>
    )
}

export default Form