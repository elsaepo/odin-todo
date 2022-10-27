import { getNewID, getNewLabelID } from "./idController.js";

let currentProjectID = 1;

const projectList = [];

let labelList = [
  { label: "Work", color: "#3c89d0", id: 1 },
  { label: "Study", color: "#ca5cdd", id: 2 },
  { label: "Admin", color: "#ff8b3d", id: 3 },
  { label: "Shopping", color: "#7ab97a", id: 4 },
];

class Project {
  constructor(title, labelID, id) {
    this._id = id || getNewID();
    this._title = title;
    this._labelID = labelID || 0;
    this._iconClasses = ["fa-solid", "fa-folder"];
    this._taskList = [];
    projectList.push(this);
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
  get labelID() {
    return this._labelID;
  }
  set labelID(newLabelID) {
    this._labelID = newLabelID;
  }
  get labelObject() {
    return getLabelByID(this._labelID);
  }
  get iconClasses() {
    return this._iconClasses;
  }
  get taskList() {
    return this._taskList;
  }
  addTask = (taskObject, index) => {
    taskObject.parentProjectID = this.id;
    if (index) {
      this._taskList.splice(index, 0, taskObject);
    } else {
      this._taskList.push(taskObject);
    }
    return this._taskList;
  };
  removeTask = (taskObject) => {
    this._taskList = this._taskList.filter((task) => task !== taskObject);
  };
  deleteProject = function () {
    let projectIndex = projectList.findIndex((project) => this === project);
    projectList.splice(projectIndex, 1);
  };
}

const getProjectByID = function (id) {
  let projectIndex = projectList.findIndex(
    (project) => Number(id) === Number(project.id)
  );
  return projectList[projectIndex];
};

const getTaskByID = function (id) {
  let parentProject;
  let taskIndex;
  projectList.forEach((proj) => {
    let projTaskIndex = proj.taskList.findIndex(
      (task) => Number(id) === Number(task.id)
    );
    if (projTaskIndex >= 0) {
      parentProject = proj;
      taskIndex = projTaskIndex;
      return;
    }
  });
  return parentProject.taskList[taskIndex];
};

const getCurrentProject = function () {
  return currentProjectID;
};

const setCurrentProject = function (id) {
  currentProjectID = id;
};

const getProjectList = function () {
  return projectList;
};

const getFullTaskList = function () {
  let fullTaskList = [];
  projectList.forEach((proj) => {
    fullTaskList.push(...proj.taskList);
  });
  return fullTaskList;
};

const getLabelList = function () {
  return labelList;
};

const getLabelByID = function (id) {
  if (id === 0) {
    return undefined;
  }
  let labelIndex = labelList.findIndex(
    (label) => Number(id) === Number(label.id)
  );
  return labelList[labelIndex];
};

const setLabelList = function (labelObjectList) {
  labelObjectList.forEach((labelObject) => {
    if (!labelObject.id) {
      labelObject.id = getNewLabelID();
    }
  });
  labelList = labelObjectList;
};

export {
  Project,
  getProjectByID,
  getTaskByID,
  getCurrentProject,
  setCurrentProject,
  getProjectList,
  getFullTaskList,
  getLabelList,
  getLabelByID,
  setLabelList,
};
