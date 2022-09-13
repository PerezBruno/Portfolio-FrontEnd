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
import { LoginComponent } from './components/firebase/login/login.component';
import { CheckMailComponent } from './components/firebase/check-mail/check-mail.component';
import { DashboardComponent } from './components/firebase/dashboard/dashboard.component';
import { RecoverPasswordComponent } from './components/firebase/recover-password/recover-password.component';
import { RegisterUserComponent } from './components/firebase/register-user/register-user.component';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms'


//firebase
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';

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
    SkillsComponent,
    LoginComponent,
    CheckMailComponent,
    DashboardComponent,
    RecoverPasswordComponent,
    RegisterUserComponent,
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
