import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { FreelancerAvailableSectionComponent } from './components/freelancer-available-section/freelancer-available-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http'

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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ServiceSectionComponent,
    PortfolioSectionComponent,
    FreelancerAvailableSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    DialogHomeComponent,
    DialogServiceComponent,
    DialogPortfolioComponent


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
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
