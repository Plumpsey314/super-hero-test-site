import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { SuperHeroeComponent } from './super-hero.component';
import { SuperHeroService } from './super-hero.service';
import { SuperVillainComponent } from './super-villain/super-villain.component';
import { SuperVillainService } from './super-villain/super-villain.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyTitleCasePipe } from './feedback/myTitleCase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroeComponent,
    SuperVillainComponent,
    ShortenPipe,
    FeedbackComponent,
    MyTitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //classes that are needed to be created for components
  providers: [
    SuperHeroService,
    SuperVillainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
