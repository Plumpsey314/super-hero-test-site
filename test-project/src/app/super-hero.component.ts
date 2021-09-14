import { Component } from '@angular/core';
import { SuperHeroService } from './super-hero.service';

//render this component with these properties
@Component({
    //css element
    selector: 'hero',

    //html template
    templateUrl: './super-hero.component.html'
})

export class SuperHeroeComponent{
    title = "heroes";
    imageURL = 'https://static.wikia.nocookie.net/dc-superherogirls/images/5/5e/Wonder_Woman_Idle.png';
    blue = true;
    heroes;
    whatIsAHero = "A hero is a really really really reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally really heroic person"
    dummyText = "blahgfkhgfkhgf";
    hero: Hero = {
        name:"Iron Man",
        rating:9.0434121211,
        attackStrength:300000,
        defendStrength:1000000,
        birthday: new Date("1930-10-11")        
    }

    /**
     * 
     * @param service is a service that Angular creates that helps define objects in SuperHeroComponent
     * 
     */
    constructor(service: SuperHeroService, ){
        this.heroes = service.getHeroes();
    }

    onClickMe($event: any){
        $event.stopPropagation()
        console.log("A button was clicked", $event);
    }
    onDivClicked(){
        console.log("div was clicked")
    }
    onKeyUp(){
        console.log(this.dummyText)
    }

}
export interface Hero{
    name:string,
    rating:number,
    attackStrength:number,
    defendStrength:number,
    birthday: Date
}