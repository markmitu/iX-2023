
class Task {
   
    constructor(task_in, completed_in = false) {
        this.description = task_in
        this.completed = completed_in

    }

}

class UI {
    constructor() {
        this.tasks = []

        this.form = document.getElementById('form')
        this.task = document.getElementById('task-input')

        this.form.addEventListener('submit', (e) => this.add_task(e))

        this.tbody = document.getElementById("table-body")

        this.load_tasks_local()
        this.render_task_list()
    }

    add_task(e) {
        e.preventDefault()
        let task = new Task(this.task.value)
        if(task.description === '' || this.check_in_tasks(task)) return

        this.tasks.push(task)
        this.save_tasks_local()
        this.render_task_list()

        this.task.value = ''

    }

    check_in_tasks(task) {
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].description === task.description) return true
        }
        return false
    }

    render_task_list() {
        this.tbody.innerHTML = ''

        for(let i = 0; i < this.tasks.length; i++){
            const task = this.tasks[i]

            const tr = this.create_row(task)
            this.tbody.appendChild(tr)
        }
    }

    create_row(task) {
        const tr = document.createElement('tr');

        const td_task = document.createElement('td')
        td_task.innerHTML = task.description
        const td_complete = document.createElement('td')
        const td_actions = document.createElement('td')

        td_complete.appendChild(this.create_complete_button(task))
        td_actions.appendChild(this.create_remove_btn(task))
        td_actions.appendChild(this.create_edit_button(task))


        tr.appendChild(td_task)
        tr.appendChild(td_complete)
        tr.appendChild(td_actions)

        return tr
    }

    create_complete_button(task) {
        const complete_btn = document.createElement('input')
        complete_btn.setAttribute('type', 'radio')

        complete_btn.onchange = (() => this.mark_completed(task))

        if(task.completed) {
            complete_btn.checked = true
        }

        return complete_btn
    }

    mark_completed(task) {
        task.completed = true;

        this.save_tasks_local()
    }

    create_remove_btn(task) {
        const remove_btn = document.createElement('button')

        remove_btn.setAttribute('type', 'radio')
        remove_btn.setAttribute('class', 'btn btn-outline-danger mx-1')
        remove_btn.innerHTML = 'Delete'
        // remove_btn.innerHTML = ('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>')

        remove_btn.addEventListener('click', (e) => this.remove_task(e, task))

        return remove_btn
    }

    create_edit_button(task) {
        const edit_btn = document.createElement('button')

        edit_btn.setAttribute('type', 'radio')
        edit_btn.setAttribute('class', 'btn btn-outline-info')
        edit_btn.innerHTML = "Edit"

        edit_btn.addEventListener('click', (e) => this.edit_task(e, task))

        return edit_btn
    }

    edit_task(e, task_value) {
        e.preventDefault()
        
        this.tasks = this.tasks.filter((x) => {return x != task_value} )
        this.task.value = task_value.description

        this.save_tasks_local()
        this.render_task_list()
    }


    remove_task(e, task) {
        e.preventDefault()

        this.tasks = this.tasks.filter((x) => { return x != task } )
        this.save_tasks_local()
        this.render_task_list()
    }

    save_tasks_local() {
        const tasks_json = JSON.stringify(this.tasks)
        localStorage.setItem('tasks', tasks_json)
    }

    load_tasks_local() {
        const tasks_json = localStorage.getItem('tasks')
        if(tasks_json) {
            let temp = JSON.parse(tasks_json)
            this.tasks = temp.map((x) => new Task(x.description, x.completed));
        }
    }

}


const ui = new UI()
