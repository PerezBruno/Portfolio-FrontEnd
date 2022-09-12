import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { FreelancerAvalilableComponent } from './components/freelancer-avalilable/freelancer-avalilable.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactSectionComponent,
    ExperienceComponent,
    FooterComponent,
    FreelancerAvalilableComponent,
    HomeSectionComponent,
    NavbarComponent,
    PortfolioSectionComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
