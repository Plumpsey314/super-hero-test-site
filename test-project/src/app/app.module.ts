import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHeroeComponent } from './super-hero.component';
import { SuperHeroService } from './super-hero.service';
import { SuperVillainComponent } from './super-villain/super-villain.component';
import { SuperVillainService } from './super-villain/super-villain.service';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroeComponent,
    SuperVillainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //classes that are needed to be created for components
  providers: [
    SuperHeroService,
    SuperVillainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
