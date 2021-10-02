import { Component, Input} from '@angular/core';

@Component({
  selector: 'superman-feedback',
  templateUrl: './superman-feedback.component.html',
  styleUrls: ['./superman-feedback.component.css']
})
export class SupermanFeedbackComponent {
  @Input() votes!: number;
  isSelected!: boolean;

  toggleVote(){
    this.isSelected = !this.isSelected;
    this.votes=this.isSelected?this.votes+1:this.votes-1;
  }
}
