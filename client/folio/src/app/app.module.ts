import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from 'src/app/card/card.component';

import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { InfoPopComponent } from './info-pop/info-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CardComponent,
    SkillComponent,
    HomeComponent,
    CardComponent,
    ProjectComponent,
    ContactComponent,
    InfoPopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
