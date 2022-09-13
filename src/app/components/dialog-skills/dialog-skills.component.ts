import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-dialog-skills',
  templateUrl: './dialog-skills.component.html',
  styleUrls: ['./dialog-skills.component.css']
})
export class DialogSkillsComponent implements OnInit {

  skillsForm !: FormGroup;
  colorList = ["primary", "warn", "accent"];
  actionBtn : string = "Cargar habilidad";

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogSkillsComponent>
  ) { }

  ngOnInit(): void {
    this.skillsForm = this.formBuilder.group({
      skillName : ['',[Validators.required]],
      value: ['',[Validators.required]],
      description : ['',[Validators.required]],
      urlIcon : ['',[Validators.required]],
      color : ['',[Validators.required]],

    });

    if (this.editData) {
      this.actionBtn = "Actualizar habilidad";
      this.skillsForm.controls['skillName'].setValue(this.editData.skillName);
      this.skillsForm.controls['value'].setValue(this.editData.value);
      this.skillsForm.controls['description'].setValue(this.editData.description);
      this.skillsForm.controls['urlIcon'].setValue(this.editData.urlIcon);
      this.skillsForm.controls['color'].setValue(this.editData.color);


    }
    console.log (this.editData.skillName)
  }

  

  addSkill(){
    if (!this.editData){
      if(this.skillsForm.valid){
        this.api.postSkills(this.skillsForm.value)
        .subscribe({
          next:(res)=>{
            alert("Habilidad agregada correctamente");
            this.skillsForm.reset();
            this.dialogRef.close('save');
          },
          error : ()=> {
            alert("Error al intentar cargar la habilidad")
          }
        })
      }
    }else{
      this.updateSkills()
    }
  }

  updateSkills(){
    this.api.putSkills(this.skillsForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Habilidad actualizada correctamente");
        this.skillsForm.reset();
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error al intentar actualizar la habilidad");
      }
    })
  }

}
