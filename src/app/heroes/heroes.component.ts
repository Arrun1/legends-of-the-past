import { Component, OnInit } from '@angular/core';
import { Legend } from '../legend';
import { LEGENDS } from '../mock-legends';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  legends = LEGENDS;
  selectedLegend?: Legend;

  constructor() { }

  ngOnInit() {
  }

  
  onSelect(legend: Legend): void {
    this.selectedLegend = legend;
  }
}