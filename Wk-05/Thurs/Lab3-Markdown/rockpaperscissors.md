# Rock–paper–scissors

*From Simple English Wikipedia, the free encyclopedia*

**Rock, paper, scissors** (RPS) is a two-person hand game. It is often used as a selection method in a similar way to coin flipping or drawing straws to randomly select a person for some purpose.

The exact name of the game can vary, with the three components appearing in a different order, or with "stone" in place of "rock".

## Rules

The players both count aloud to three, or speak the name of the game (e.g. "Rock! Paper! Scissors!" or "Reaux! Sham! Beaux!"), each time raising one hand in a fist and swinging it down on the count. On the third count, or on a further beat after the third count (saying "shoot"), the players change their hands into one of three gestures, which they then "throw" by extending it towards their opponent.

- Rock is represented by a closed fist.
- Paper is represented by an open hand.
- Scissors is represented by the index and middle fingers extended.

The objective is to select a gesture which defeats that of the opponent. Gestures are resolved as follows:

- Rock blunts/smashes scissors; rock wins.
- Paper covers rock; paper wins.
- Scissors cut paper; scissors wins.

In terms of logic, this type of game is intransitive. If both players choose the same gesture, the game is tied and played again.

## Popularity

The game is famous in [Japan](https://en.wikipedia.org/wiki/Japan), [China](https://en.wikipedia.org/wiki/China), and the [United States](https://en.wikipedia.org/wiki/United_States).

## Scoring

JavaScript algorithm example

``` Javascript
function rockPaperScissors(player1, player2) {
    if (player1 == player2) {
        return "Draw"
    }

    if (player1 == "rock") {
        if (player2 == "scissors") {
            return "Player 1 wins"
        }
        return "Player 2 wins"
    }
    if (player1 == "paper") {
        if (player2 == "rock") {
            return "Player 1 wins"
        }
        return "Player 2 wins"
    }
    if (player1 == "scissors") {
        if (player2 == "paper") {
            return "Player 1 wins"
        }
        return "Player 2 wins"
    }
    return "Invalid input"
}

console.log(rockPaperScissors('rock', 'paper')) // Player 2 wins
console.log(rockPaperScissors('rock', 'rock')) // Draw
console.log(rockPaperScissors('scissors', 'paper')) // Player 1 wins
console.log(rockPaperScissors('paper', 'rock')) // Player 2 wins
```
