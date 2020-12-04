import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  win = false
  upperLmt = 100
  numGuesses = 5
  guessValue
  rng
  over = false
  under = false

  constructor() { }

  ngOnInit(): void {
    this.startGame()
    alert(this.rng)
  }

  getRandomInt(upperLmt) {
    return Math.floor(Math.random() * Math.floor(upperLmt));
  }

  checkGuess(guess) {
    if(guess < this.rng) {
      this.under = true
      this.over = false
    } else if (guess > this.rng) {
      this.over = true
      this.under = false
    } else if (guess === this.rng) {
      this.win = true
    }
  }

  startGame() {
    this.rng = this.getRandomInt(this.upperLmt)
  }

  newGame() {
    this.over = false
    this.under = false
    this.win = false
    // Clear Guess History Here Also
    this.startGame()
    alert(this.rng)
  }
}

