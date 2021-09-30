import { Component } from '@angular/core';
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
}
