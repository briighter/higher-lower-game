import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  win = false
  upperLimit = 100
  numGuesses = 5
  
  constructor() { }

  ngOnInit(): void {
  }

}
