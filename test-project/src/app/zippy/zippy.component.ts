import { Component, Input} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent{

  @Input() content!: string;
  @Input() title!: string;
  showContent: boolean=false;

  onClick(){
    this.showContent=!this.showContent;
  }

}
