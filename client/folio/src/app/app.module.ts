import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { InfoPopComponent } from './info-pop/info-pop.component';
import { GlobalService } from './shared/services/global.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SkillComponent,
    HomeComponent,
    ProjectComponent,
    ContactComponent,
    InfoPopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
