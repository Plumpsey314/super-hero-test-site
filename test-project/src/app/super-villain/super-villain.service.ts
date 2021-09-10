import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperVillainService {

  constructor() { 
  }

  villains(){
    return ["Thanos", "The Anti Monitor", "Loki", "Draco Malfroy"]
  }
}
