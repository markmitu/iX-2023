

export class Task {
    constructor(desc_in, completed_in = false) {
        this.desc = desc_in;
        this.completed = completed_in;
    }

    static from_JSON(task) {
        return new Task(task.desc, task.completed);
    }
}