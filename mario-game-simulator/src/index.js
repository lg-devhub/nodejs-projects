const player1 = {
    NAME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NAME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

const player3 = {
    NAME: "Mario",
    VELOCIDADE: "",
    MANOBRABILIDADE: "",
    PODER: "",
    PONTOS: 0,
};

const player4 = {
    NAME: "Mario",
    VELOCIDADE: "",
    MANOBRABILIDADE: "",
    PODER: "",
    PONTOS: 0,
};

const player5 = {
    NAME: "Mario",
    VELOCIDADE: "",
    MANOBRABILIDADE: "",
    PODER: "",
    PONTOS: 0,
};

const player6 = {
    NAME: "Mario",
    VELOCIDADE: "",
    MANOBRABILIDADE: "",
    PODER: "",
    PONTOS: 0,
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default: 
            result = "CONFRONTO"
            break;
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 ROLOU UM DADO DE ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        //sorteio
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

          //roll dices
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //ability´s test
    let TotalTestSkill1 = 0;
    let TotalTestSkill2 = 0;

    if (block === "RETA"){
        TotalTestSkill1 = diceResult1 + character1.VELOCIDADE;
        TotalTestSkill2 = diceResult2 + character2.VELOCIDADE;
        
        await logRollResult(
            character1.NAME, 
            "velocidade", 
            diceResult1, 
            character1.VELOCIDADE
        )

        await logRollResult(
            character2.NAME, 
            "velocidade", 
            diceResult2, 
            character2.VELOCIDADE
        )
    }
    if (block === "CURVA"){
        TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
        TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

        await logRollResult(
            character1.NAME, 
            "manobrabilidade", 
            diceResult1, 
            character1.MANOBRABILIDADE
        )

        await logRollResult(
            character2.NAME, 
            "manobrabilidade", 
            diceResult2, 
            character2.MANOBRABILIDADE
        )


    }
    if (block === "CONFRONTO"){
        let powerResult1 = diceResult1 + character1.PODER;
        let powerResult2 = diceResult2 + character2.PODER;

        console.log(`${character1.NAME} CONFRONTOU ${character2.NAME}`);

            await logRollResult(
            character1.NAME, 
            "poder", 
            diceResult1, 
            character1.PODER
        );

        await logRollResult(
            character2.NAME, 
            "poder", 
            diceResult2, 
            character2.PODER
        );

        if(powerResult2 > powerResult1 && character1.PONTOS > 0){
            console.log(`${character1.NAME} venceu o confronto! ${character2.NAME} perdeu um ponto`);
            character1.PONTOS--;
        }

        if(powerResult1 > powerResult2 && character2.PONTOS > 0){
            console.log(`${character2.NAME} venceu o confronto! ${character1.NAME} perdeu um ponto`);
            character2.PONTOS--;
        }


        console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido!" : "")
        
    }

    //checking winner

    if(TotalTestSkill1 > TotalTestSkill2){
        console.log(`${character1.NAME} MARCOU UM PONTO!`);
        character1.PONTOS++;
    }else if(TotalTestSkill2 > TotalTestSkill1){
        console.log(`${character2.NAME} MARCOU UM PONTO!`);
        character2.PONTOS++;
    }

    console.log("------------------------------------------------------------------")

    }
}

async function declareWinner(character1, character2){
    console.log("Resultado Final: ")
    console.log(`${character1.NAME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NAME}: ${character2.PONTOS} ponto(s)`)

    if(character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NAME} ganhou a corrida! Parabéns!`);
     else if (character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NAME} ganhou a corrida! Parabéns!`);
     else console.log("A corrida terminou em empate");
    
}


//main function -> estrutura auto invocável -> Auto Invoke
(async function main(){
    console.log(
        `=============== 🏁 Corrida entre ${player1.NAME} E ${player2.NAME} começando... ===============\n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();