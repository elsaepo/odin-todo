import { getNewID } from "./idController.js"

class Task {
    constructor(title, description, dueDate, status, priority) {
        this._id = getNewID();
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._status = status;
        this._priority = priority;
        this._completed = false;
    }

    get id(){
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
    }
    get dueDate(){
        return this._dueDate;
    }
    set dueDate(newDueDate){
        this._dueDate = newDueDate;
    }
    get priority(){
        return this._priority;
    }
    set priority(newPriority){
        this._priority = newPriority;
    }
}

export { Task };