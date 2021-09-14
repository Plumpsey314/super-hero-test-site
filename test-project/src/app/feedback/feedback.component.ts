import { Component } from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{

  feedbackText: string;
  iconClass : string;
  private goodReview: boolean;

  constructor() {
    this.feedbackText="";
    this.iconClass = "glyphicon glyphicon-ok"
    this.goodReview = false;
  }

  toggleReview(){
    this.goodReview = !this.goodReview;
    if (this.iconClass === "glyphicon glyphicon-ok"){
      this.iconClass = "glyphicon glyphicon-remove"
    }else{
      this.iconClass = "glyphicon glyphicon-ok"
    }

  }

  updateFeedbackText($event: any){}

}
