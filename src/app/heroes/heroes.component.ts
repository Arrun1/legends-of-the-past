import { Component, OnInit } from '@angular/core';

import { Legend } from '../legend';
import { LegendService } from '../legend.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  

  legends: Legend[] = [];
  

  constructor(private legendService: LegendService) { }


  ngOnInit() {
    this.getLegends();
  }

  
  
  getLegends(): void {
    this.legendService.getLegends()
        .subscribe(legends => this.legends= legends);
  }





}