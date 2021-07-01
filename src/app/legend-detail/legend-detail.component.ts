import { Component, OnInit} from '@angular/core';
import { Legend } from '../legend';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LegendService } from '../legend.service';

@Component({
  selector: 'app-legend-detail',
  templateUrl: './legend-detail.component.html',
  styleUrls: ['./legend-detail.component.css']
})
export class LegendDetailComponent implements OnInit {
  legend: Legend | undefined;

  constructor(
    private route: ActivatedRoute,
    private legendService: LegendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLegend();
  }

  getLegend(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.legendService.getLegend(id)
    .subscribe(legend => this.legend = legend);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.legend) {
      this.legendService.updateLegend(this.legend)
        .subscribe(() => this.goBack());
    }
  }

}
