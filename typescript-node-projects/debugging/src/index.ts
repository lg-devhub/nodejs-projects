import {pushEmailMessage} from "./services/email";

const message = await pushEmailMessage("Ricardo Benedito");
console.log(message);

(async function iniciateSystem() {
    console.log("Hello World!");
})();

