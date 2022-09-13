import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { LoginService } from 'src/app/services/login.service';
import { DialogHomeComponent } from '../dialog-home/dialog-home.component';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  miPortfolio:any;
  login : boolean = true;

  contactForm!: FormGroup;

  constructor(
    private dialog : MatDialog,
    private api : ApiService,
    private user : LoginService,
    private formBuilder : FormBuilder,
    private contacServices : ContactFormService

  ) { }

  ngOnInit(): void {
       this.getAllUsers();
       this.contactForm = this.formBuilder.group({
         nameContact : ['',[Validators.required]],
         emailContact : ['',[Validators.required, Validators.email]],
         subjetctContact : ['',[Validators.required]],
         messageContact : ['',[Validators.required]],
       })
      }
   
     openDialog() {
       this.dialog.open(DialogHomeComponent, {
         width: "50%"
       });
     }
   
     getAllUsers(){
       this.api.getUser().subscribe(data =>{
         this.miPortfolio = data;
       })
     }
   
     editUser(miPortfolio : any){
       this.dialog.open(DialogHomeComponent, {
         width: '50%',
         data : miPortfolio
       }).afterClosed().subscribe(val=>{
         if(val==='update'){
           this.getAllUsers();
         }
       })
      }
   
     async submitForm(){
       console.log(this.contactForm.value);
       const response = await this.contacServices.addMessage(this.contactForm.value);
       this.contactForm.reset();
       alert("su mensaje ha sido enviado con exito!");
   
     }
   

}
