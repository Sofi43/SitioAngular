import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  updateHero(hero: Hero) {
    throw new Error('Method not implemented.');
  }
  getHero(id: number) {
    throw new Error('Method not implemented.');
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor(private messageService: MessageService) { }
}