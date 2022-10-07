import { getNewID } from "./idController.js"

class Task {
    constructor(title, description, dueDate, status, priority, parentProjectID, id) {
        console.log(id)
        this._id = id || getNewID();
        console.log(this._id)
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._status = status;
        this._priority = priority;
        this._completed = false;
        this._parentProjectID = parentProjectID;
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
    get completed(){
        return this._completed;
    }
    set completed(newCompleted){
        this._completed = newCompleted;
    }
    get parentProjectID(){
        return this._parentProjectID;
    }
    set parentProjectID(newParentProjectID){
        this._parentProjectID = newParentProjectID;
    }
}

export { Task };