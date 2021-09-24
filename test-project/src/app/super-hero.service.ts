export class SuperHeroService{
    constructor(){

    }
    
    /**
     * returns a list of superheroes
     */
    getHeroes(){
        return [
            {
              name:"Black Panther",
              rating: 4,
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
}