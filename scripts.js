const btns = document.querySelectorAll('.rps-btn');
const results = document.querySelector('.results');
const scores = {"playerScore": 0, "cpuScore": 0, "ties": 0};

function newGame() {
  btns.forEach((b) => { b.addEventListener('click', handleClick); });
  Object.keys(scores).forEach((k) => scores[k] = 0);

  results.querySelector('#round-result').textContent = "Rock, paper, scissors...";
  results.querySelector('#num-rounds').textContent = "Rounds played: 0";
  results.querySelector('#player-score').textContent = "Player score: 0";
  results.querySelector('#cpu-score').textContent = "Computer score: 0";
  results.querySelector('#num-ties').textContent = "Ties: 0";
  results.querySelector('#final-result').textContent = "\xa0";

  displayResetButton(false);
}

function displayResetButton(b) {
  if (b) {
    results.querySelector('#play-again').addEventListener('click', newGame);
    results.querySelector('#play-again').style.visibility = 'visible';
  } else {
    results.querySelector('#play-again').removeEventListener('click', newGame);
    results.querySelector('#play-again').style.visibility = 'hidden';
  }
}

function handleClick(e) {
  const playerSelection = e.target.id;

  // converts playerSelection to a numeric key and processes the result
  const result = processSelections({"rock": 0, "paper": 1, "scissors": 2}[playerSelection], Math.floor(Math.random()*3));

  updateResults(result);
}

function processSelections(p, c) {
  const comp = p-c;     // gets a numeric value based on the difference of player and computer selections
  const key = (comp == 0) ? 0 : (comp == 1 || comp == -2) ? 1 : -1; // if 0, tie. if 1 or -2, player wins. if -1 or 2, cpu wins
  return {"key": key, "playerKey": p, "cpuKey": c };
}

function updateResults(r) {
  const selectionKey = ["rock", "paper", "scissors"]; // used to parse playerKey/cpuKey into corresponding selections
  const outcomeKey = r.key+1;   // used to parse whether the player wins/ties/loses

  let output = (outcomeKey == 1) ?
            `You both picked ${selectionKey[r.playerKey]}. ` :
            `You picked ${selectionKey[r.playerKey]} and the computer picked ${selectionKey[r.cpuKey]}. `;
  output += `You ${["lose!", "tie!", "win!"][outcomeKey]}`;

  results.querySelector('#round-result').textContent = output;

  if (outcomeKey == 0) {
    results.querySelector('#cpu-score').textContent = `Computer score: ${++scores.cpuScore}`;
  } else if (outcomeKey == 1) {
    results.querySelector('#num-ties').textContent = `Ties: ${++scores.ties}`;
  } else {
    results.querySelector('#player-score').textContent = `Player score: ${++scores.playerScore}`;
  }

  results.querySelector('#num-rounds').textContent = `Rounds played: ${Object.keys(scores).map((k) => scores[k]).reduce((a, s) => a+s, 0)}`

  if (gameOver()) {
    let finalResult = (scores.playerScore >= 5) ? "Congratulations! You win!" : "Computer wins! Better luck next time!";

    results.querySelector('#final-result').textContent = finalResult;
    btns.forEach((b) => { b.removeEventListener('click', handleClick); });

    displayResetButton(true);
  }
}

function gameOver() {
  return (scores.playerScore >= 5 || scores.cpuScore >= 5);
}

newGame();
