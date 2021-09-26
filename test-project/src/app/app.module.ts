import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    AddHeroComponent
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
