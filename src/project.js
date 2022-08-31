class Project {
    constructor(name, label){
        this._name = name;
        this._label = label;
        this._taskList = [];
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get label(){
        return this._label;
    }
    set label(newLabel){
        this._label = newLabel;
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
        //search taskList for taskObject, using ID
        //if it exists, remove it
        //return tasklist
    }
}

export { Project };