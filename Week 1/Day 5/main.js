

class UI {
    constructor() {
        this.tasks = []

        this.task = document.getElementById('task-input')
        this.form = document.getElementById('form')
        this.form.addEventListener('submit', (e) => this.add_task(e))

        this.tbody = document.getElementById("table-body")
    }


    add_task(e) {
        e.preventDefault()
        let task = this.task.value
        if(task === '') return

        this.tasks.push(task)
        this.render_task_list()

        this.task.value = ''

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
        td_task.innerHTML = task
        const td_complete = document.createElement('td')
        const td_remove = document.createElement('td')

        td_complete.appendChild(this.create_complete_button())
        td_remove.appendChild(this.create_remove_btn())

        tr.appendChild(td_task)
        tr.appendChild(td_complete)
        tr.appendChild(td_remove)

        return tr
    }

    create_complete_button() {
        const complete_btn = document.createElement('input')
        complete_btn.setAttribute('type', 'radio')

        return complete_btn
    }

    create_remove_btn() {
        const remove_btn = document.createElement('button')

        remove_btn.setAttribute('type', 'radio')
        remove_btn.setAttribute('class', 'btn')
        remove_btn.innerHTML = ('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>')

        remove_btn.addEventListener('click', (e) => this.remove_task(e))

        return remove_btn
    }


    remove_task(e) {
        e.preventDefault()

        console.log("To do")
    }

}


const ui = new UI()