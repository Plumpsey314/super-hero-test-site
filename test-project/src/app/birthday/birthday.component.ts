/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  heroName!: string;
  birthdate!: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe(res =>{
      this.heroName = <string>res.get('hero');
      this.birthdate = <string>res.get('birthdate');
    });
  }

  backToHeroes(){
    this.router.navigate(['']);
  }

}
