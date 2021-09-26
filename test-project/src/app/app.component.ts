import { Component } from '@angular/core';
import { feedbackData } from './feedback/feedback.component';
import { Hero} from './super-hero.component';
import { SuperHeroService } from './super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular test-project';

  constructor(){
    let first: boolean = true;
    window.addEventListener('DOMContentLoaded', (event)=>{
      event.stopPropagation();
      setTimeout(()=>{window.scroll(0,0)}, 500)
    });
    if(document.visibilityState == 'hidden'){
      window.addEventListener('visibilitychange', (childEvent) =>{
        if(first){
          first=false;
          setTimeout(()=>{window.scroll(0,0)}, 500);
        }
        childEvent.stopPropagation();
      });
    }
  }

  post = {
    title: this.title,
    goodReview: false,
    numberOfVotes: 1040,
    heroes: [] as Hero[]
  }

  onFeedbackChange(args: feedbackData){
    console.log(args);
  }
  loadHeroes(){
    const service= new SuperHeroService();
    this.post.heroes = service.getHeroes();
  }
}
