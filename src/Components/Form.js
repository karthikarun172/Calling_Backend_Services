import React from 'react'

function Form({ handleChange, formValues, handleSubmit }) {
    return (
        <div style={{ height: "200px", width: "350px" }} >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }} >
                <input placeholder='Title' onChange={handleChange} value={formValues.title} name="title"  ></input>
                <input placeholder='Priority' onChange={handleChange} value={formValues.priority} name="priority"   ></input>
                <input placeholder='Brief' onChange={handleChange} value={formValues.brief} name="brief" ></input>
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default Form