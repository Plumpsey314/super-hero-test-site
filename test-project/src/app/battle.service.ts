import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class BattleService {

  hero!: string;
  villain!: string;
  posts!: any[];
  private url;

  // eslint-disable-next-line no-unused-vars
  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts'; 
  }
  
  createPost(input: any){
    this.http.post(this.url, JSON.stringify(input)).subscribe(res =>{
      console.log(res);
    });
  }

  getPost(){
    return this.http.get(this.url);
  }

  describeBattle(){
    return this.hero + ' is going to fight ' + this.villain; 
  }

  getBattles(){
    return [
      {
        description: 'Epic Battle with ' + this.hero + ' and ' + this.villain,
        id: 0
      },
      {
        description: 'Big Battle with ' + this.hero + ' and ' + this.villain,
        id: 1
      }
    ];
  }
}

