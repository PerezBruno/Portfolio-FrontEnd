import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-service',
  templateUrl: './dialog-service.component.html',
  styleUrls: ['./dialog-service.component.css']
})
export class DialogServiceComponent implements OnInit {

  serviceForm !: FormGroup;
  actionBtn : string = "Cargar estudio";

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogServiceComponent>
  ) { }

  ngOnInit(): void {
    this.serviceForm = this.formBuilder.group({
      title : ['',[Validators.required]],
      school : ['',[Validators.required]],
      description : ['',[Validators.required]],
      dateStart : ['',[Validators.required]],
      dateEnd : ['',[Validators.required]],
      tools : ['',[Validators.required]],
    })

    if (this.editData) {
      this.actionBtn = "Actualizar estudio";
      this.serviceForm.controls['title'].setValue(this.editData.title);
      this.serviceForm.controls['school'].setValue(this.editData.school);
      this.serviceForm.controls['description'].setValue(this.editData.description);
      this.serviceForm.controls['dateStart'].setValue(this.editData.dateStart);
      this.serviceForm.controls['dateEnd'].setValue(this.editData.dateEnd);
      this.serviceForm.controls['tools'].setValue(this.editData.tools);
    }


  }

  addService(){
    if(!this.editData){
      if(this.serviceForm.valid){
        this.api.postService(this.serviceForm.value)
        .subscribe({
          next:(res)=>{
            alert("Estudio agregado correctamente");
            this.serviceForm.reset();
            this.dialogRef.close('save');
          },
          error : ()=> {
            alert("Error al intentar cargar el estudio")
          }
        })
      }
    }else{
      this.updateService()
    }
  }

  updateService(){
    this.api.putService(this.serviceForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Estudio actualizado correctamente");
        this.serviceForm.reset();
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error al intentar actualizar los estudios");
      }
    })
  }

}
