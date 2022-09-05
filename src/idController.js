let currentID = 0;

const getNewID = () => {
    currentID++;
    console.log(`id is got`)
    return currentID;
}

export { getNewID };