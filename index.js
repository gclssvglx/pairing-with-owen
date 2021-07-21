const ROCK_PAPER_SCISSORS_RULES = {
  "Rock": ["Scissors"],
  "Paper": ["Rock"],
  "Scissors": ["Paper"],
}

const ROCK_PAPER_SCISSORS_LIZARD_SPOCK_RULES = {
  "Rock": ["Scissors", "Lizard"],
  "Paper": ["Rock", "Spock"],
  "Scissors": ["Paper", "Lizard"],
  "Lizard": ["Paper", "Spock"],
  "Spock": ["Scissors", "Rock"],
}

function rockPaperScissors(player1, player2) {
  return game(ROCK_PAPER_SCISSORS_RULES, player1, player2)
}

function rockPaperScissorsLizardSpock(player1, player2) {
  return game(ROCK_PAPER_SCISSORS_LIZARD_SPOCK_RULES, player1, player2)
}

function game(rules, player1, player2) {
  if (rules[player1].includes(player2)) {
    return player1
  } else if (rules[player2].includes(player1)) {
    return player2
  } else {
    return "Draw"
  }
}

module.exports = {
  rockPaperScissors: rockPaperScissors,
  rockPaperScissorsLizardSpock: rockPaperScissorsLizardSpock,
}
