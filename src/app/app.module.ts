import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { FreelancerAvailableSectionComponent } from './components/freelancer-available-section/freelancer-available-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http'

//Angular Material

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogHomeComponent} from './components/dialog-home/dialog-home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogServiceComponent } from './components/dialog-service/dialog-service.component';
import { DialogPortfolioComponent } from './components/dialog-portfolio/dialog-portfolio.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { DialogExperienceComponent } from './components/dialog-experience/dialog-experience.component';
import { DialogSkillsComponent } from './components/dialog-skills/dialog-skills.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginComponent } from './components/firebase/login/login.component';
import { DashboardComponent } from './components/firebase/dashboard/dashboard.component';
import { RegisterUserComponent } from './components/firebase/register-user/register-user.component';
import { CheckMailComponent } from './components/firebase/check-mail/check-mail.component';
import { RecoverPasswordComponent } from './components/firebase/recover-password/recover-password.component';

//Firebase

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSectionComponent,
    ServiceSectionComponent,
    PortfolioSectionComponent,
    FreelancerAvailableSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    DialogHomeComponent,
    DialogServiceComponent,
    DialogPortfolioComponent,
    SkillsComponent,
    ExperienceComponent,
    DialogExperienceComponent,
    DialogSkillsComponent,
    LoginComponent,
    DashboardComponent,
    RegisterUserComponent,
    CheckMailComponent,
    RecoverPasswordComponent



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatChipsModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
