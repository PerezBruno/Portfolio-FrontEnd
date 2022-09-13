import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-portfolio',
  templateUrl: './dialog-portfolio.component.html',
  styleUrls: ['./dialog-portfolio.component.css']
})
export class DialogPortfolioComponent implements OnInit {

  portfolioForm !: FormGroup;
  actionBtn : string = "Cargar proyecto";

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogPortfolioComponent>,

  ) { }

  ngOnInit(): void {
    this.portfolioForm = this.formBuilder.group({
      urlImage : ['',[Validators.required]],
      alt: ['',[Validators.required]],
      title : ['',[Validators.required]],
      description : ['',[Validators.required]],
      urlProyecto : ['',[Validators.required]],
    });

    if (this.editData) {
      this.actionBtn = "Actualizar proyecto";
      this.portfolioForm.controls['urlImage'].setValue(this.editData.urlImage);
      this.portfolioForm.controls['alt'].setValue(this.editData.alt);
      this.portfolioForm.controls['title'].setValue(this.editData.title);
      this.portfolioForm.controls['description'].setValue(this.editData.description);
      this.portfolioForm.controls['urlProyecto'].setValue(this.editData.urlProyecto);

    }

    console.log (this.editData)

  }

  

  addPortfolio(){
    if (!this.editData){
      if(this.portfolioForm.valid){
        this.api.postPortfolio(this.portfolioForm.value)
        .subscribe({
          next:(res)=>{
            alert("Portfolio agregado correctamente");
            this.portfolioForm.reset();
            this.dialogRef.close('save');
          },
          error : ()=> {
            alert("Error al intentar cargar el portfolio")
          }
        })
      }
    }else{
      this.updatePortfolio()
    }
  }

  updatePortfolio(){
    this.api.putPortfolio(this.portfolioForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Proyecto actualizado correctamente");
        this.portfolioForm.reset();
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error al intentar actualizar el proyecto");
      }
    })
  }

}
