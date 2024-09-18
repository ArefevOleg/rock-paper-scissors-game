// Функция getRandomComputerResult используется для получения выбора компьютера
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  // получаем случайный индекс массива
  const randomIndex = Math.floor(Math.random() * options.length)
  // Умножение случайного числа из диапазона [0, 1)
  // на длину массива даст случайное число в диапазоне [0, array.length)

  // получаем случайный элемент в массиве
  return options[randomIndex];
}

// начальное количество оков
let playerScore = 0;
let computerScore = 0;

//  создаём функцию которая определяет кто победил,
// если выиграл игрок возвращает true, а если компьютер false
function hasPlayerWonTheRound(player, computer) {
  player = getRandomComputerResult();
  computer = getRandomComputerResult();
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

// создайм функцию которая сообщает кто выиграл
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
// если игрок выиграл обновляем playerScore на 1 и отоброжаем
// "Player wins! userOption beats computerResult"
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
// Если компьютер и игрок выбирают один и тот же вариант, возвращаем сообщение
// "It's a tie! Both chose userOption"
    return `It's a tie! Both chose ${userOption}`;
  } else {
// Если компьютер выиграет раунд обновляем computerScore на 1 и возвращаем сообщение
// "Computer wins! computerResult beats userOption"
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

console.log(getRoundResults("Rock"))

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

// создаём функцию, которая обновляет результаты и сообщает  о результатах раунда
function showResults(userOption) {

};

showResults("Rock");