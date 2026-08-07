import * as database from "./database.js";
import * as api from "./api.js";

database.connectToDatabase("myDatabase");
database.disconnectDatabase("MyDatabase");
api.getFromDataApi();