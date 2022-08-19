import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService) {

      this.registerUser = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(6)]]
      })
     }

  ngOnInit(): void {
  }

  registrar() {
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeatPassword = this.registerUser.value.repeatPassword;

    console.log(this.registerUser)

    if (password !== repeatPassword) {
      alert("Las contraseñas ingresadas deben ser las mismas");
      return;
    }


    this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.verificarCorreo();
    }).catch((error) => {

      alert(this.firebaseError.codeError(error.code))
    })
  }

  get Email() {
    return this.registerUser.get('email');
  }

  get Password() {
    return this.registerUser.get('password');
  }

  get RepeatPassword() {
    return this.registerUser.get('repeatPassword');

  }

  verificarCorreo() {
    this.afAuth.currentUser.then(user => user?.sendEmailVerification())
      .then(() => {
        alert("Le enviamos un correo electrónico para su verificación");
        this.router.navigate(['/login']);
      });
  }



}
