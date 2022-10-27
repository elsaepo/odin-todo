import { getNewID } from "./idController.js";

class Task {
  constructor(taskObj) {
    this._id = taskObj.id || getNewID();
    this._title = taskObj.title;
    this._description = taskObj.description;
    this._dueDate = taskObj.dueDate;
    this._status = taskObj.status || undefined;
    this._priority = taskObj.priority;
    this._completed = taskObj.completed || false;
    this._parentProjectID = taskObj.parentProjectID;
  }

  get id() {
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
  get dueDate() {
    return this._dueDate;
  }
  set dueDate(newDueDate) {
    this._dueDate = newDueDate;
  }
  get priority() {
    return this._priority;
  }
  set priority(newPriority) {
    this._priority = newPriority;
  }
  get completed() {
    return this._completed;
  }
  set completed(newCompleted) {
    this._completed = newCompleted;
  }
  get parentProjectID() {
    return this._parentProjectID;
  }
  set parentProjectID(newParentProjectID) {
    this._parentProjectID = newParentProjectID;
  }
}

export { Task };
