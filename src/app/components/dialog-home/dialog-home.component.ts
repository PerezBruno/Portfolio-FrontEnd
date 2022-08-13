import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-home',
  templateUrl: './dialog-home.component.html',
  styleUrls: ['./dialog-home.component.css']
})
export class DialogHomeComponent implements OnInit {

  homeForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.homeForm = this.formBuilder.group({
      userName : ['',[Validators.required]],
      userLastname : ['',[Validators.required]],
      urlImage : ['',[Validators.required]],
      title : ['',[Validators.required]],
      phone : ['',[Validators.required]],
      email : ['',[Validators.required]],
      email2 : ['',[Validators.required]],
      description : ['',[Validators.required]],
      pagGithub : ['',[Validators.required]],
      pagLinkedin : ['',[Validators.required]]
    })
  }

  addUsuario(){
    console.log(this.homeForm.value)
  }

}
