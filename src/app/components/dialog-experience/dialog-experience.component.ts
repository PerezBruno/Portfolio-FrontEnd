import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-experience',
  templateUrl: './dialog-experience.component.html',
  styleUrls: ['./dialog-experience.component.css']
})
export class DialogExperienceComponent implements OnInit {

  experienceForm !: FormGroup;
  actionBtn : string = "Cargar experiencia";

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject (MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogExperienceComponent>
  ) { }

  ngOnInit(): void {
    this.experienceForm = this.formBuilder.group({
      jobPosition : ['',[Validators.required]],
      company : ['',[Validators.required]],
      dateStart : ['',[Validators.required]],
      dateEnd : ['',[Validators.required]],
      description : ['',[Validators.required]],
    })

    if (this.editData) {
      this.actionBtn = "Actualizar experiencia";
      this.experienceForm.controls['jobPosition'].setValue(this.editData.jobPosition);
      this.experienceForm.controls['company'].setValue(this.editData.company);
      this.experienceForm.controls['dateStart'].setValue(this.editData.dateStart);
      this.experienceForm.controls['dateEnd'].setValue(this.editData.dateEnd);
      this.experienceForm.controls['description'].setValue(this.editData.description);
    }


  }

  addExperience(){
    if(!this.editData){
      if(this.experienceForm.valid){
        this.api.postExperience(this.experienceForm.value)
        .subscribe({
          next:(res)=>{
            alert("Estudio agregado correctamente");
            this.experienceForm.reset();
            this.dialogRef.close('save');
          },
          error : ()=> {
            alert("Error al intentar cargar el estudio")
          }
        })
      }
    }else{
      this.updateExperience()
    }
  }

  updateExperience(){
    this.api.putExperience(this.experienceForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Estudio actualizado correctamente");
        this.experienceForm.reset();
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error al intentar actualizar los estudios");
      }
    })
  }


}
