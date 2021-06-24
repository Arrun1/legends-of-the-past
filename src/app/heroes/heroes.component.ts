import { Component, OnInit } from '@angular/core';
import { Legend } from '../legend';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  legend: Legend ={
    id: 1,
    name: 'King Arthur'
  };



  constructor() { }

  ngOnInit() {
  }

}
