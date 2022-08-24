import { Component, OnInit } from '@angular/core';
import { DialogHomeComponent } from '../dialog-home/dialog-home.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  miPortfolio:any;
  login : boolean = true;

  constructor(
    private dialog : MatDialog,
    private api : ApiService,
    private afAuth: AngularFireAuth,
    private router: Router,
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

  editUsuario(miPortfolio : any){
    this.dialog.open(DialogHomeComponent, {
      width: '50%',
      data : miPortfolio
    })
  }

  logOut(){

    this.afAuth.signOut().then(()=>{
      this.router.navigate(['/dashboard'])
    })

  }

}
