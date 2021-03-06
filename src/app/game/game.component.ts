import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GameOverComponent } from '../game-over/game-over.component';
import { GameWinComponent } from '../game-win/game-win.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  upperLmt = 100
  numGuesses = 5
  guessValue: number
  rng: number
  over = false
  under = false
  guessHistory = []
  progressBarVal = 0
  progressInc = 100/this.numGuesses

  constructor(public gameOverDialog: MatDialog, public gameWinDialog: MatDialog) { }

  ngOnInit(): void {
    this.startGame()
  }

  getRandomInt(upperLmt) {
    return Math.floor(Math.random() * Math.floor(upperLmt));
  }

  checkGuess(guess) {
    if (guess === undefined) {
      //Do Nothing
    } else {
      if (this.numGuesses != 0) {
        if (guess < this.rng) {
          this.under = true
          this.over = false
        } else if (guess > this.rng) {
          this.over = true
          this.under = false
        } else if (guess === this.rng) {
          this.winGame()
        }
        this.addGuessToHistory(guess)
        this.numGuesses--
        this.progressBarVal+= this.progressInc
        if (this.numGuesses === 0) {
          this.gameOver()
        }
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
    this.gameWinDialog.open(GameWinComponent , {
      height: '600px',
      width: '480px',
    }).afterClosed().subscribe(result => {
      this.newGame()
    })  
  }

  gameOver() {
    this.gameOverDialog.open(GameOverComponent , {
      height: '600px',
      width: '480px',
    }).afterClosed().subscribe(result => {
      this.newGame()
    })
  }

  newGame() {
    this.over = false
    this.under = false
    this.guessHistory = []
    this.numGuesses = 5
    this.progressBarVal = 0
    this.guessValue = undefined
    this.startGame()
  }
}

