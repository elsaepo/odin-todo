let currentID = 0;

const getNewID = () => {
    currentID++;
    return currentID;
}

export { getNewID };