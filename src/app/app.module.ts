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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//angular materila
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MessagesComponent } from './components/messages/messages.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    MessagesComponent,
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatChipsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
