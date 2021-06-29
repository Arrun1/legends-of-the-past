import { Injectable } from '@angular/core';
import { Legend } from './legend';
import { LEGENDS } from './mock-legends';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  constructor(private messageService: MessageService) { }

  getLegends(): Observable<Legend[]> {
    const legends = of(LEGENDS);
    this.messageService.add('LegendService: fetched legends');
    return legends;
  }

  getLegend(id: number): Observable<Legend> {
    
    const legend = LEGENDS.find(h => h.id === id)!;
    this.messageService.add(`LegendService: fetched legend id=${id}`);
    return of(legend);
  }
}
