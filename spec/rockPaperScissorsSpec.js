const game = require("../index.js")

describe("Rock, Paper, Scissors", function() {
  describe("Player 1 Wins", function() {
    it("Rock beats Scissors", function() {
      expect(game.rockPaperScissors("Rock", "Scissors")).toBe("Rock")
    })

    it("Paper beats Rock", function() {
      expect(game.rockPaperScissors("Paper", "Rock")).toBe("Paper")
    })

    it("Scissors beats Paper", function() {
      expect(game.rockPaperScissors("Scissors", "Paper")).toBe("Scissors")
    })
  })

  describe("Player 2 Wins", function() {
    it("Rock beats Scissors", function() {
      expect(game.rockPaperScissors("Scissors", "Rock")).toBe("Rock")
    })

    it("Paper beats Rock", function() {
      expect(game.rockPaperScissors("Rock", "Paper")).toBe("Paper")
    })

    it("Scissors beats Paper", function() {
      expect(game.rockPaperScissors("Paper", "Scissors")).toBe("Scissors")
    })
  })

  describe("It's a Draw", function() {
    it("Draw", function() {
      expect(game.rockPaperScissors("Paper", "Paper")).toBe("Draw")
    })
  })
})



