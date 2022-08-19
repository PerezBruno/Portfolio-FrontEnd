import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-home',
  templateUrl: './dialog-home.component.html',
  styleUrls: ['./dialog-home.component.css']
})
export class DialogHomeComponent implements OnInit {

  homeForm !: FormGroup;
  actionBtn : string = "Cargar usuario";

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogHomeComponent>
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

    if (this.editData) {
      this.actionBtn = "Actualizar usuario";
      this.homeForm.controls['userName'].setValue(this.editData.userName);
      this.homeForm.controls['userLastname'].setValue(this.editData.userLastname);
      this.homeForm.controls['urlImage'].setValue(this.editData.urlImage);
      this.homeForm.controls['title'].setValue(this.editData.title);
      this.homeForm.controls['phone'].setValue(this.editData.phone);
      this.homeForm.controls['email'].setValue(this.editData.email);
      this.homeForm.controls['email2'].setValue(this.editData.email2);
      this.homeForm.controls['description'].setValue(this.editData.description);
      this.homeForm.controls['description'].setValue(this.editData.description);
      this.homeForm.controls['pagGithub'].setValue(this.editData.pagGithub);
      this.homeForm.controls['pagLinkedin'].setValue(this.editData.pagLinkedin);

    }
  }

  addUser(){
    if(!this.editData){
      if(this.homeForm.valid){
        this.api.postUser(this.homeForm.value)
        .subscribe({
          next:(res)=>{
            alert("Usuario agregado correctamente");
            console.log(res)
            this.homeForm.reset();
            this.dialogRef.close('save');
          },
          error : ()=> {
            alert("Error al intentar cargar el usuario")
          }
        })
      }
    }else{
      this.updateUser()
    }
  }

  updateUser(){
    this.api.putUser(this.homeForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Usuario actualizado correctamente");
        this.homeForm.reset();
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error al intentar actualizar el usuario");
      }
    })
  }

}
