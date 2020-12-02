import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  win = false
  upperLmt = 100
  numGuesses = 5

  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(upperLmt) {
    return Math.floor(Math.random() * Math.floor(upperLmt));
  }
}

