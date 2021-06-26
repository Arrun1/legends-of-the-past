import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendDetailComponent } from './legend-detail.component';

describe('LegendDetailComponent', () => {
  let component: LegendDetailComponent;
  let fixture: ComponentFixture<LegendDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
