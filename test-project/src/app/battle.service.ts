import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  constructor(private hero: string, private villain: string) {

  }
  
  describeBattle(){
    return this.hero + " is going to fight " + this.villain; 
  }
}
