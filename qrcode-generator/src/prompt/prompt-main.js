import chalk from "chalk";
import prompt from "prompt";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Choose your tool (1 - QRCode) or (2 - Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic.bold("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default mainPrompt;