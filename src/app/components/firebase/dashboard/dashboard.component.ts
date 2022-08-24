import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataUser : any;
  signIn: boolean = true;

  constructor(
   private afAuth: AngularFireAuth,
   private router: Router,
  ) {
    
  }

  ngOnInit(): void {

    this.afAuth.currentUser.then(user=>{
      //console.log(this.dataUser);
      if(user && user.emailVerified){
        this.dataUser = user;
      }else {
        this.router.navigate(['/dashboard']);
      }
    })
  }
}
