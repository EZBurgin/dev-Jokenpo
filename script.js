const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let HumanScoreNumber = 0
let MachineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log(`Humano: ${human} Maquina: ${machine}`)

    if (human === machine){
        result.innerHTML = "Deu empate"
    }else if (human === "paper" && machine === "rock" || human === "rock" && machine === "scissors" || human === "scissors" && machine === "paper") {
        result.innerHTML = "Você ganhou"
        HumanScoreNumber += 1
        humanScore.innerHTML = HumanScoreNumber
    }else {
        result.innerHTML = "Você perdeu pra alexa!"
        MachineScoreNumber += 1
        machineScore.innerHTML = MachineScoreNumber
    }

}