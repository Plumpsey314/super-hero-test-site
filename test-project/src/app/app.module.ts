import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { SuperHeroComponent } from './super-hero.component';
import { SuperHeroService } from './super-hero.service';
import { SuperVillainComponent } from './super-villain/super-villain.component';
import { SuperVillainService } from './super-villain/super-villain.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyTitleCasePipe } from './feedback/myTitleCase.pipe';
import { LocationComponent } from './location/location.component';
import { SupermanFeedbackComponent } from './superman-feedback/superman-feedback.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BattleFieldsComponent } from './battle-fields/battle-fields.component';
import { BattlesComponent } from './battles/battles.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BattleComponent } from './battle/battle.component';
import { BattleService } from './battle.service';
import { BirthdayComponent } from './birthday/birthday.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroComponent,
    SuperVillainComponent,
    ShortenPipe,
    FeedbackComponent,
    MyTitleCasePipe,
    LocationComponent,
    SupermanFeedbackComponent,
    EquipmentComponent,
    InputFormatDirective,
    ZippyComponent,
    AddHeroComponent,
    NavbarComponent,
    NotFoundComponent,
    BattleFieldsComponent,
    BattlesComponent,
    HomePageComponent,
    BattleComponent,
    BirthdayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'birthday/:hero/:birthdate',
        component: BirthdayComponent
      },
      {
        path: 'battleFields',
        component: BattleFieldsComponent
      },
      {
        path: 'battles/:id/:body',
        component: BattleComponent
      },
      {
        path: 'battles',
        component: BattlesComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  //classes that are needed to be created for components
  providers: [
    SuperHeroService,
    SuperVillainService,
    BattleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
