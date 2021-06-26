import { Component, OnInit, Input } from '@angular/core';
import { Legend } from '../legend';

@Component({
  selector: 'app-legend-detail',
  templateUrl: './legend-detail.component.html',
  styleUrls: ['./legend-detail.component.css']
})
export class LegendDetailComponent implements OnInit {
  @Input() legend?: Legend;

  constructor() { }

  ngOnInit(): void {
  }

}
