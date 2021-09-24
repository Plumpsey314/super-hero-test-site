import { Component, Input } from '@angular/core';
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
    whatAreMyHeroes = "My heroes are really really really reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally reallyreally really heroic people"
    dummyText = "blahgfkhgfkhgf";
    @Input() heroes!: Hero[];

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
    addHero(){
        this.heroes.push({
            name:"Spiderman",
            rating:12.51,
            attackStrength:31,
            defendStrength:266026,
            birthday: new Date("1984-05-05")  
        });
    }

    /**
     * 
     * @param hero is the Hero we want to remove from heroes
     * 
     * This method removes hero from the heroes array
     */
    removeHero(hero: Hero){
        this.heroes.splice(this.heroes.indexOf(hero) ,1);
    }

    /**
     * 
     * @param index is the index of the hero in heroes
     * @param hero is the hero object with the index of index in heroes
     * 
     * This method returns the hero's name in order to help angular track the list of heroes
     */
    trackHero(index: number, hero: Hero){
        return hero.name;
    }

}
export interface Hero{
    name:string,
    rating:number,
    attackStrength:number,
    defendStrength:number,
    birthday: Date
}