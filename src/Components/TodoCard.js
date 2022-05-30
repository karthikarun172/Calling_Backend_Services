import React from 'react'

function TodoCard({ title, priority, brief, handleDelete }) {
    return (
        <div style={{ height: "150px", width: "250px", margin: "10px", backgroundColor: "gray", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
            <div>
                <h2>{title}</h2>
                <p>{brief}</p>
            </div>
            <div style={{ width: "70px" }} >
                <h3>{priority}</h3>
                <div>
                    <button onClick={handleDelete} style={{ backgroundColor: "red", border: "none" }} >Delete</button>
                </div>
            </div>

        </div>
    )
}

export default TodoCard