import chalk from 'chalk';
import prompt from 'prompt';

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode"),
    },
    {
        name: "type",
        description: chalk.yellow("ESCOLHA O TIPO DO QRCODE (1 - NORMAL | 2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("ESCOLHA APENAS ENTRE 1 E 2"),
        required: true,
    },
];

export default promptQRCode; 