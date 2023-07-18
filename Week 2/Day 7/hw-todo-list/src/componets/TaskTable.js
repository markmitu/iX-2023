import React from 'react'

export default function TaskTable(props) {

  return (
    <div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Complete</th> 
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id='table-body'>
            {
            props.tasks.map((task) => {
                return (
                    <tr key={task.desc}> 
                        <td>{task.desc}</td>
                        <td>
                            <input className='btn' type='radio'></input>
                        </td>
                        <td>
                        <button
                        className='btn btn-sm btn-outline-danger  me-1'
                        onClick={() => props.on_task_delete(task)}
                        >Delete</button>
                        <button
                        className='btn btn-outline-info btn-sm'
                        onClick={() => props.on_task_edit(task)}
                        >Edit</button>
                        </td>
                    </tr> 
                );
            })
            }
            </tbody>    
        </table>
    </div>
  )
}
