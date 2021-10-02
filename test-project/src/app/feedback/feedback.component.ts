import { Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FeedbackComponent{
  canSubmit = false;
  feedbackText: string;
  contactMethods: contactMethod[];
  characters=[
    {
      id: 0,
      name: 'Electro'
    },
    {
      id: 1,
      name: 'Superman'
    },
    {
      id: 2,
      name: 'Myself'
    }
  ];
  @Input('goodReview') checkedReview!: boolean;
  @Output('change') click = new EventEmitter();

  constructor() {
    this.feedbackText='';
    this.contactMethods = [
      { 
        id:0,
        name:''
      },
      { 
        id:1,
        name:'email'
      },
      { 
        id:2,
        name:'mail'
      },
      { 
        id:3,
        name:'in person'
      },
      { 
        id:4,
        name:'mesenger owl'
      },      
      { 
        id:5,
        name:'phone'
      }
    ];
  }

  toggleReview(){
    this.checkedReview = !this.checkedReview;
    this.click.emit({checked:this.checkedReview});
  }

  onNameUpdate(name:any){
    this.canSubmit=name.valid;
    this.log(name);
  }

  log(toConsole:any){
    console.log(toConsole);
  }

  submit(form: any){
    this.log(form.value);
  }

}
export interface feedbackData {
  checked: boolean
}

interface contactMethod{
  id: number,
  name: string
}