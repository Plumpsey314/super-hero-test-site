import { Component, Input} from '@angular/core';
import { SuperHeroComponent, Hero} from '../super-hero.component'
import { SuperHeroService } from '../super-hero.service';

@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {

  @Input('btnStyleOn') btnStyleOn!: boolean;
  @Input('selectedOption') selectedOption!: any;
  @Input('defaultText') heroName!: string;
  @Input('heroRating') heroRating!: number;
  @Input('heroAttackStrength') heroAttackStrength!: number;
  @Input('heroDefendStrength') heroDefendStrength!: number;
  @Input('heroBirthday') heroBirthday!: Date;
  @Input('superHeroComponent') superHeroComponent!: SuperHeroComponent;
  heroes!: Hero[];
  heroNames: string[] = [];

  constructor() { 
    this.heroes = new SuperHeroService().getExtraHeroes();
  }

  onKeyUp(){
    console.log(this.heroName);
  }

  updateHeroNames(){
    this.heroNames = [];
    (this.superHeroComponent.heroes).forEach(hero => {
      this.heroNames.push(hero.name);
    });
  }

  addHero($event: any){
    $event.stopPropagation();
    let superHeroComponentHeroes: Hero[] = this.superHeroComponent.heroes;
    if(this.selectedOption){
      this.updateHeroNames();
      if(this.selectedOption === 1){
        if(!this.heroNames.includes(this.heroName)){
          superHeroComponentHeroes.push({
            name: this.heroName,
            rating: this.heroRating,
            attackStrength: this.heroAttackStrength,
            defendStrength: this.heroDefendStrength,
            birthday: this.heroBirthday 
          });
        }
      }else if(!this.heroNames.includes(this.heroes[this.selectedOption-2].name)){
        superHeroComponentHeroes.push(this.heroes[this.selectedOption-2])
      }
    }
  }

  onDivClicked(){
      console.log("div was clicked")
  }
}
