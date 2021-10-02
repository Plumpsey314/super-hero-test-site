import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleService } from '../battle.service';
import { combineLatest} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css'],
  providers: [BattleService]
})
export class BattlesComponent implements OnInit {
  battles!: any[];
  // eslint-disable-next-line no-unused-vars
  constructor(private route: ActivatedRoute,private service: BattleService) {
    service.hero = 'Elastagirl';
    service.villain = 'Herley Quinn';
  }

  ngOnInit(){
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(switchMap( () =>{
        return this.service.getPost();
      }))
      .subscribe(battles => {
        this.battles = <any>battles;
      });
  }

}
