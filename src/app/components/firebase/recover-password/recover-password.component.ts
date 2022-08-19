import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  recoverPassword: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.recoverPassword = this.fb.group({
      emailRecup : ['', [Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  recover(){
    const email = this.recoverPassword.value.emailRecup;

    this.afAuth.sendPasswordResetEmail(email).then(()=>{
      alert("Le enviamos un correo para restablecer su password");
      this.router.navigate(['/login'])

    }).catch((error)=>{
      alert(this.firebaseError.codeError(error.code));
    })
  }

  get Email()
  {
    return this.recoverPassword.get('emailRecup');
  }


}
