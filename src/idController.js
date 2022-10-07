let currentID = 0;

const getNewID = () => {
    currentID++;
    return currentID;
}

const getCurrentID = () => {
    return currentID;
}

const setCurrentID = (id) => {
    currentID = id;
}

export { getNewID, getCurrentID, setCurrentID };