import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import TaskForm from './componets/TaskForm';
import TaskTable from './componets/TaskTable';
import { Task } from './models/Task';

import { useState, useEffect } from 'react';

function App() {
  const [tasks, set_tasks] = useState([]);
  const [task_to_edit, set_task_to_edit] = useState(null);

  useEffect(() => {
    load_from_local_storage();
  }, []);

  function on_task_created(task) {
    set_task_to_edit(null);
    set_tasks([...tasks, task]);
    save_to_local_storage([...tasks, task]);
  }

  function on_task_delete(task) {
    const updated_list = tasks.filter((x) => x.desc !== task.desc);
    set_tasks(updated_list);
    save_to_local_storage(updated_list);
  }

  function on_task_edit(task) {
    set_task_to_edit(task);
    set_tasks(tasks.filter((x) => x.desc !== task.desc));
  }

  function save_to_local_storage(tasks) {
    const tasks_json = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasks_json);
  }

  function load_from_local_storage() {
    const tasks_json = localStorage.getItem('tasks');
    if(tasks_json) {
      const temp = JSON.parse(tasks_json);
      set_tasks(temp.map((task) => Task.from_JSON(task)));
    }
  }

  return (
    <div className="text-center mt-5">
      <div className='card mx-4 p-4'>
        <h1>To Do List</h1>
        <hr/>
        <TaskForm
        on_task_created={on_task_created}
        task_to_edit={task_to_edit}
        />
        <hr/>
        <TaskTable 
        tasks={tasks}
        on_task_delete={on_task_delete}
        on_task_edit={on_task_edit}
        />
      </div> 
    </div>
  );
}

export default App;
