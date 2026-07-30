async function connecToDatabase(user, password) {

    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log("Conectado com sucesso!")
    } else {
        console.log("Conexão não estabelecida...")
    }
}

export default connecToDatabase;