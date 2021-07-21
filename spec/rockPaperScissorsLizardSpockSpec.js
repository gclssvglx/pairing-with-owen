const game = require("../index.js")

describe("Rock, Paper, Scissors, Lizard, Spock", function() {
  describe("Player 1 Wins", function() {
    it("Rock beats Scissors", function() {
      expect(game.rockPaperScissorsLizardSpock("Rock", "Scissors")).toBe("Rock")
    })

    it("Rock beats Lizard", function() {
      expect(game.rockPaperScissorsLizardSpock("Rock", "Lizard")).toBe("Rock")
    })

    it("Paper beats Rock", function() {
      expect(game.rockPaperScissorsLizardSpock("Paper", "Rock")).toBe("Paper")
    })

    it("Paper beats Spock", function() {
      expect(game.rockPaperScissorsLizardSpock("Paper", "Spock")).toBe("Paper")
    })

    it("Scissors beats Paper", function() {
      expect(game.rockPaperScissorsLizardSpock("Scissors", "Paper")).toBe("Scissors")
    })

    it("Scissors beats Lizard", function() {
      expect(game.rockPaperScissorsLizardSpock("Scissors", "Lizard")).toBe("Scissors")
    })

    it("Lizard beats Paper", function() {
      expect(game.rockPaperScissorsLizardSpock("Lizard", "Paper")).toBe("Lizard")
    })

    it("Lizard beats Spock", function() {
      expect(game.rockPaperScissorsLizardSpock("Lizard", "Spock")).toBe("Lizard")
    })

    it("Spock beats Rock", function() {
      expect(game.rockPaperScissorsLizardSpock("Spock", "Rock")).toBe("Spock")
    })

    it("Spock beats Scissors", function() {
      expect(game.rockPaperScissorsLizardSpock("Spock", "Scissors")).toBe("Spock")
    })
  })

  describe("Player 2 Wins", function() {
    it("Rock beats Scissors", function() {
      expect(game.rockPaperScissorsLizardSpock("Scissors", "Rock")).toBe("Rock")
    })

    it("Rock beats Lizard", function() {
      expect(game.rockPaperScissorsLizardSpock("Lizard", "Rock")).toBe("Rock")
    })

    it("Paper beats Rock", function() {
      expect(game.rockPaperScissorsLizardSpock("Rock", "Paper")).toBe("Paper")
    })

    it("Paper beats Spock", function() {
      expect(game.rockPaperScissorsLizardSpock("Spock", "Paper")).toBe("Paper")
    })

    it("Scissors beats Paper", function() {
      expect(game.rockPaperScissorsLizardSpock("Paper", "Scissors")).toBe("Scissors")
    })

    it("Scissors beats Lizard", function() {
      expect(game.rockPaperScissorsLizardSpock("Lizard", "Scissors")).toBe("Scissors")
    })

    it("Lizard beats Paper", function() {
      expect(game.rockPaperScissorsLizardSpock("Paper", "Lizard")).toBe("Lizard")
    })

    it("Lizard beats Spock", function() {
      expect(game.rockPaperScissorsLizardSpock("Spock", "Lizard")).toBe("Lizard")
    })

    it("Spock beats Rock", function() {
      expect(game.rockPaperScissorsLizardSpock("Rock", "Spock")).toBe("Spock")
    })

    it("Spock beats Scissors", function() {
      expect(game.rockPaperScissorsLizardSpock("Scissors", "Spock")).toBe("Spock")
    })
  })

  describe("It's a Draw", function() {
    it("Draw", function() {
      expect(game.rockPaperScissorsLizardSpock("Paper", "Paper")).toBe("Draw")
    })
  })
})

