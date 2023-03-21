import React from 'react'

function List({tasks}) {
    return (
        <ul>
            {tasks.map((task, key) =>
                <li key={key}>{task.task}</li>
            )}
        </ul>
    )
}

export default List