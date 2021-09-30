import {Hero} from './super-hero.component'

export class SuperHeroService{
    constructor(){}
    
    /**
     * returns a list of superheroes
     */
    getHeroes():Hero[]{
      return [
        {
          name:"Black Panther",
          rating: 10,
          attackStrength:300000,
          defendStrength:1000000,
          birthday: new Date("1930-10-11")        
        },
        {
          name:"Iron Man",
          rating:9.0434121211,
          attackStrength:100000,
          defendStrength:10000,
          birthday: new Date("1977-01-14")        
        },{
          name:"Captain America",
          rating:1,
          attackStrength:342342,
          defendStrength:0,
          birthday: new Date("1930-10-14")    
        }   
      ];
    }

    /**
     * returns a list of superheroes that is not initially displayed when heroes are loaded
    */
    getExtraHeroes():Hero[]{
      return[
        {
          name:"Groot",
          rating:5,
          attackStrength:1000000,
          defendStrength:600341,
          birthday: new Date("2000-01-01")    
        },
        {
          name:"Gamora",
          rating:6,
          attackStrength:123041,
          defendStrength:53058,
          birthday: new Date("1993-12-04")    
        },
        {
          name:"Spiderman",
          rating:0.57722,
          attackStrength:31,
          defendStrength:266026,
          birthday: new Date("1984-05-05")
        },
        {
          name:"Yondu",
          rating:7,
          attackStrength:127777,
          defendStrength:731347,
          birthday: new Date("1984-04-30") 
        }
      ]
    }
}