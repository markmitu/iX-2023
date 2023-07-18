import React, { useEffect, useState } from 'react';

import { Task } from '../models/Task';
 

export default function TaskForm(props) {
  const [desc, set_desc] = useState('');
  const [completed, set_completed] = useState(false);

  useEffect(() => {
    if(props.task_to_edit) {
        set_desc(props.task_to_edit.desc);
        set_completed(props.task_to_edit.completed);
    }
  }, [props.task_to_edit]);

  function on_form_submit(e) {
    e.preventDefault();
    if(desc === '') return;

    let task = new Task(desc);
    props.on_task_created(task);
    set_desc('');
    set_completed(false);
  }

  return (
    <div>
      <form id='form' onSubmit={on_form_submit}>
        <div class="input-group">
          <input id="task-input" type="text" class="form-control" 
          placeholder="Enter Task" onChange={(e) => set_desc(e.target.value)}/>
            <button type='submit' class="input-group-text" id="basic-addon2">
            { props.task_to_edit ? 'Update Task' : "+"}
            </button>
          </div>
      </form>
    </div>
  )
}
