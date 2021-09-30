import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleService } from '../battle.service';
import { Observable, combineLatest} from 'rxjs';
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css'],
  providers: [BattleService]
})
export class BattlesComponent implements OnInit {
  battles!: any[];
  constructor(private route: ActivatedRoute,private service: BattleService) {
    this.service.hero = 'Elastagirl';
    this.service.villain = 'Herley Quinn'
  }

  ngOnInit(){
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(switchMap( combined =>{
        let id = combined[0].get('id');
        let heroCombatant = combined[1].get('heroCombatant');

        return this.service.getPost();
      }))
      .subscribe(battles => {
        this.battles = <any>battles;
      });
  }

}
