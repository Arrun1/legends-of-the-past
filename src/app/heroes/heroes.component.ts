import { Component, OnInit } from '@angular/core';

import { Legend } from '../legend';
import { LegendService } from '../legend.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedLegend?: Legend;

  legends: Legend[] = [];
  

  constructor(private legendService: LegendService, private messageService:MessageService) { }


  ngOnInit() {
    this.getLegends();
  }

  
  onSelect(legend: Legend): void {
    this.selectedLegend = legend;
    this.messageService.add(`HeroesComponent: Selected legend id=${legend.id}`);
  }

  getLegends(): void {
    this.legendService.getLegends()
        .subscribe(legends => this.legends= legends);
  }





}