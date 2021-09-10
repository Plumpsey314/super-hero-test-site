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
    title = "heroes"
    heroes;

    /**
     * 
     * @param service is a service that Angular creates that helps define objects in SuperHeroComponent
     * 
     */
    constructor(service: SuperHeroService){
        this.heroes = service.getHeroes();
    }

}