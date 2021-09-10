import { Component, OnInit } from '@angular/core';
import { SuperVillainService } from './super-villain.service';

@Component({
  selector: 'villain',
  templateUrl: './super-villain.component.html',
  styleUrls: ['./super-villain.component.css']
})
export class SuperVillainComponent implements OnInit {
  title = "villians";
  villains;

  constructor(service: SuperVillainService) { 
    this.villains = service.villains();
  }

  ngOnInit(): void {
  }

}
