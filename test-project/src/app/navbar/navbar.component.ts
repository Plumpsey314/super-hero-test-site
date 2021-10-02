import { Component} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  backgroundColor: string;

  constructor() { 
    this.backgroundColor = environment.navBackgroundColor;
  }

}
