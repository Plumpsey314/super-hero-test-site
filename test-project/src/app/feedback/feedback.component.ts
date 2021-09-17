import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{

  feedbackText: string;
  @Input('goodReview') checkedReview!: boolean;
  @Output('change') click = new EventEmitter();

  constructor() {
    this.feedbackText="";
  }

  toggleReview(){
    this.checkedReview = !this.checkedReview;
    this.click.emit({checked:this.checkedReview});
  }

  updateFeedbackText($event: any){}

}
export interface feedbackData {
  checked: boolean
}