import { Component, OnInit } from '@angular/core';
import { DialogHomeComponent } from '../dialog-home/dialog-home.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  miPortfolio:any;
  login : boolean = true;


  constructor(
    private dialog : MatDialog,
    private api : ApiService,
    private user : LoginService

  ) { 
    this.user.stateUser().subscribe(res=>{
      if(res) {
        this.login = true;
        
      } else {
        this.login = false;
  }
  })
}

  ngOnInit(): void {
    this.getAllUsers();
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

}
