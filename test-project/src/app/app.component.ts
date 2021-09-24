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

  post = {
    title: this.title,
    goodReview: true,
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
