import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillComponent, pathMatch: 'prefix' },
  { path: 'projects', component: ProjectComponent, pathMatch: 'prefix' },
  { path: 'contact', component: ContactComponent, pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
