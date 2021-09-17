import { Component } from '@angular/core';
import { feedbackData } from './feedback/feedback.component';

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
    numberOfVotes: 1040
  }

  onFeedbackChange(args: feedbackData){
    console.log(args);
  }
}
