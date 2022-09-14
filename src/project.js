class Project {
    constructor(title, label){
        this._title = title;
        this._label = label;
        this._iconClasses = ["fa-solid", "fa-folder"];
        this._taskList = [];
    }

    get title(){
        return this._title;
    }
    set title(newTitle){
        this._title = newTitle;
    }
    get label(){
        return this._label;
    }
    set label(newLabel){
        this._label = newLabel;
    }
    get iconClasses(){
        return this._iconClasses;
    }
    get taskList(){
        return this._taskList;
    }
    addTask = (taskObject, index) => {
        if (index){
            this._taskList.splice(index, 0, taskObject);
        } else {
            this._taskList.push(taskObject);
        }
        return this._taskList;
    }
    removeTask = (taskObject) => {
        this._taskList = this._taskList.filter(task => task !== taskObject);
    }
}

export { Project };