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
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


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
    SkillsComponent,
    HardSkillsComponent,
    LoginComponent,
    PortfolioComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 44,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#8351b1",
      "outerStrokeGradientStopColor": "#83bffb",
      "innerStrokeColor": "#f0f2f4",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

