import { Component } from '@angular/core';
import { feedbackData } from '../feedback/feedback.component';
import { Hero} from '../super-hero.component';
import { SuperHeroService } from '../super-hero.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = 'Angular test-project';

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