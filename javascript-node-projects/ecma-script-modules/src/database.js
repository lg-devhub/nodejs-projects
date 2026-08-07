const dataType = {
    userType: "admin",
    typeData: "datalocal",
};


async function connectToDatabase(dataName){
    //connection´s logic
    console.log(`Connected to the Database ${dataName}`);
}

async function disconnectDatabase(dataName){
    console.log(`Disconnected from the Database ${dataName}`);
}
export {
connectToDatabase,
disconnectDatabase,
dataType
};