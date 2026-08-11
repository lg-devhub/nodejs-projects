import connectToDatabase from "./database/data.js"

(async function main() {

    console.log("Hello World!");
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE);

    let senha = gets("lab10", "senha01", "senha02");

    if(senha == "lab10" && "senha01")

})();

