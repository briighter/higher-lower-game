import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  win = false
  gameOver = false
  upperLmt = 100
  numGuesses = 5
  guessValue: number
  rng: number
  over = false
  under = false
  guessHistory = []

  constructor() { }

  ngOnInit(): void {
    this.startGame()
    alert(this.rng) // Remove when done
  }

  getRandomInt(upperLmt) {
    return Math.floor(Math.random() * Math.floor(upperLmt));
  }

  checkGuess(guess) {
    if (this.numGuesses != 0) {
      if (guess < this.rng) {
        this.under = true
        this.over = false
      } else if (guess > this.rng) {
        this.over = true
        this.under = false
      } else if (guess === this.rng) {
        this.win = true
      }
      this.addGuessToHistory(guess)
      this.numGuesses--
      if (this.numGuesses === 0) {
        this.endGame()
      }
    }

  }

  addGuessToHistory(guess) {
    this.guessHistory.push(guess + ", ")
  }

  startGame() {
    this.rng = this.getRandomInt(this.upperLmt)
  }

  winGame() {
    // Add Win Modal
  }

  endGame() {
    this.gameOver = true;
    alert("Game Over XD")
    // Add End Game Modal
  }

  newGame() {
    this.over = false
    this.under = false
    this.win = false
    // Clear Guess History Here Also
    this.startGame()
    alert(this.rng) // Remove when done
  }
}

