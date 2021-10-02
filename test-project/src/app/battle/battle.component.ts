import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  // eslint-disable-next-line no-unused-vars
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  submit(){
    this.router.navigate(['/battles'], {queryParams:{
      body: 'This is a body',
      id: 0 
    }});
  }

}
