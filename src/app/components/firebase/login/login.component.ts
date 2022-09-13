import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) { 
    this.loginUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
  }

  
  login(){
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;

    this.afAuth.signInWithEmailAndPassword(email, password).then ((user)=>{
      console.log(user);
      if(user.user?.emailVerified){
      this.router.navigate(['/dashboard'])
      } else {
        this.router.navigate(['/verificar-correo']);
      }
    }).catch((error)=>{
       alert(this.firebaseError.codeError(error.code));
    })

  }

  get Email()
  {
    return this.loginUser.get('email');
  }

  get Password()
  {
    return this.loginUser.get('password');
  }


}



