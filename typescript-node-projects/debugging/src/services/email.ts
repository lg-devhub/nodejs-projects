async function pushEmailMessage(senderName:string): Promise<string> {
    let base = `Olá ${senderName}, já encaminhei meu currículo!`;
    base += "\nMeu portfolio também está anexado ^-^";
    return base;
}

export{
    pushEmailMessage,
};