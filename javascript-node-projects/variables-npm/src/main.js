import connectToDatabase from "./database/data.js"

(async function main() {

    console.log("Hello World!");
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE);
})();

