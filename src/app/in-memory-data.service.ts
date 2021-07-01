import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Legend } from './legend';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const legends = [
      { id: 11, name : 'Lu Bu' },
      { id: 12, name : 'Oda Nobunaga'},
      { id: 13, name : 'Lancelot'},
      { id: 14, name : 'Sasaki Koujiro'},
      { id: 15, name : 'King Arthur'},
      { id: 16, name : 'King Leonidas'},
      { id: 17, name : 'Hannibal Barca'},
      { id: 18, name : 'Gilgamesh'},
      { id: 19, name : 'Achilles'},
      { id: 20, name : 'Sun Tzu'}
    ];
    return {legends};
  }

 
  genId(legends: Legend[]): number {
    return legends.length > 0 ? Math.max(...legends.map(legend => legend.id)) + 1 : 11;
  }
}