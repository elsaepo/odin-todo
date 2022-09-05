/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/idController.js":
/*!*****************************!*\
  !*** ./src/idController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewID": () => (/* binding */ getNewID)
/* harmony export */ });
let currentID = 0;

const getNewID = () => {
    currentID++;
    console.log(`id is got`)
    return currentID;
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
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
        this._taskList = this._taskList.filter(task => task !== taskObject);
    }
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _idController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idController.js */ "./src/idController.js");


class Task {
    constructor(title, description, dueDate, status, priority) {
        this._id = (0,_idController_js__WEBPACK_IMPORTED_MODULE_0__.getNewID)();
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
// module that creates projects & gets/sets their properties
// adds, removes tasks


// module that creates todos & gets/sets their properties


let myProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project("myNewProject", "shopping")
let myTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("myTaskTitle", "myTaskDescription");
let myTask2 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("secondTaskTitle", "secondTaskDesc");
let myTask3 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("thirdTaskTitle", "thirdTaskDesc");
myProject.addTask(myTask);
myProject.addTask(myTask2);
myProject.addTask(myTask3);

console.log(`task list: ${myProject.taskList}`);
    

// what happens when we move a task from one project to another?
// what happens when we delete a project?
// what happens when we set a task as completed? is that controlled by the task module or an external module that manipulates it?

// dom module(s)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzRDOztBQUU1QztBQUNBO0FBQ0EsbUJBQW1CLDBEQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDdUM7O0FBRXZDO0FBQ2lDOztBQUVqQyxvQkFBb0IsZ0RBQU87QUFDM0IsaUJBQWlCLDBDQUFJO0FBQ3JCLGtCQUFrQiwwQ0FBSTtBQUN0QixrQkFBa0IsMENBQUk7QUFDdEI7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixtQkFBbUI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2lkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGN1cnJlbnRJRCA9IDA7XG5cbmNvbnN0IGdldE5ld0lEID0gKCkgPT4ge1xuICAgIGN1cnJlbnRJRCsrO1xuICAgIGNvbnNvbGUubG9nKGBpZCBpcyBnb3RgKVxuICAgIHJldHVybiBjdXJyZW50SUQ7XG59XG5cbmV4cG9ydCB7IGdldE5ld0lEIH07IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGFiZWwpe1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5fdGFza0xpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgc2V0IG5hbWUobmV3TmFtZSl7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuZXdOYW1lO1xuICAgIH1cbiAgICBnZXQgbGFiZWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgIH1cbiAgICBzZXQgbGFiZWwobmV3TGFiZWwpe1xuICAgICAgICB0aGlzLl9sYWJlbCA9IG5ld0xhYmVsO1xuICAgIH1cbiAgICBnZXQgdGFza0xpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0O1xuICAgIH1cbiAgICBhZGRUYXNrID0gKHRhc2tPYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCl7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDAsIHRhc2tPYmplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdGFza0xpc3QucHVzaCh0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3Q7XG4gICAgfVxuICAgIHJlbW92ZVRhc2sgPSAodGFza09iamVjdCkgPT4ge1xuICAgICAgICB0aGlzLl90YXNrTGlzdCA9IHRoaXMuX3Rhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2sgIT09IHRhc2tPYmplY3QpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9OyIsImltcG9ydCB7IGdldE5ld0lEIH0gZnJvbSBcIi4vaWRDb250cm9sbGVyLmpzXCJcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzdGF0dXMsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuX2lkID0gZ2V0TmV3SUQoKTtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZShuZXdEdWVEYXRlKXtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfVxuICAgIGdldCBwcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSl7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUYXNrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgdGhhdCBjcmVhdGVzIHByb2plY3RzICYgZ2V0cy9zZXRzIHRoZWlyIHByb3BlcnRpZXNcbi8vIGFkZHMsIHJlbW92ZXMgdGFza3NcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbi8vIG1vZHVsZSB0aGF0IGNyZWF0ZXMgdG9kb3MgJiBnZXRzL3NldHMgdGhlaXIgcHJvcGVydGllc1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxubGV0IG15UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwibXlOZXdQcm9qZWN0XCIsIFwic2hvcHBpbmdcIilcbmxldCBteVRhc2sgPSBuZXcgVGFzayhcIm15VGFza1RpdGxlXCIsIFwibXlUYXNrRGVzY3JpcHRpb25cIik7XG5sZXQgbXlUYXNrMiA9IG5ldyBUYXNrKFwic2Vjb25kVGFza1RpdGxlXCIsIFwic2Vjb25kVGFza0Rlc2NcIik7XG5sZXQgbXlUYXNrMyA9IG5ldyBUYXNrKFwidGhpcmRUYXNrVGl0bGVcIiwgXCJ0aGlyZFRhc2tEZXNjXCIpO1xubXlQcm9qZWN0LmFkZFRhc2sobXlUYXNrKTtcbm15UHJvamVjdC5hZGRUYXNrKG15VGFzazIpO1xubXlQcm9qZWN0LmFkZFRhc2sobXlUYXNrMyk7XG5cbmNvbnNvbGUubG9nKGB0YXNrIGxpc3Q6ICR7bXlQcm9qZWN0LnRhc2tMaXN0fWApO1xuICAgIFxuXG4vLyB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBtb3ZlIGEgdGFzayBmcm9tIG9uZSBwcm9qZWN0IHRvIGFub3RoZXI/XG4vLyB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBkZWxldGUgYSBwcm9qZWN0P1xuLy8gd2hhdCBoYXBwZW5zIHdoZW4gd2Ugc2V0IGEgdGFzayBhcyBjb21wbGV0ZWQ/IGlzIHRoYXQgY29udHJvbGxlZCBieSB0aGUgdGFzayBtb2R1bGUgb3IgYW4gZXh0ZXJuYWwgbW9kdWxlIHRoYXQgbWFuaXB1bGF0ZXMgaXQ/XG5cbi8vIGRvbSBtb2R1bGUocylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==