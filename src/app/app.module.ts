import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/header/head/head.component';
import { SocialMediaComponent } from './components/header/social-media/social-media.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/about/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NoJobComponent } from './components/no-job/no-job.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SocialMediaComponent,
    AboutComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    NoJobComponent,
    ProjectsComponent,
    FooterComponent,
    SoftSkillsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
