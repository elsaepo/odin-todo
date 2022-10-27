let currentID = 0;
let currentLabelID = 0;

const getNewID = () => {
  currentID++;
  return currentID;
};

const getCurrentID = () => {
  return currentID;
};

const setCurrentID = (id) => {
  currentID = id;
};

const getNewLabelID = () => {
  currentLabelID++;
  return currentLabelID;
};

const getLabelID = () => {
  return currentLabelID;
};

const setLabelID = (id) => {
  currentLabelID = id;
};

export {
  getNewID,
  getCurrentID,
  setCurrentID,
  getNewLabelID,
  getLabelID,
  setLabelID,
};
