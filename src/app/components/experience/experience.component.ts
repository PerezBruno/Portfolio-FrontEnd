import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CvService } from 'src/app/services/cv.service';
import { DialogExperienceComponent } from '../dialog-experience/dialog-experience.component';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  misExperiencias:any;

  constructor(
    private api : ApiService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllExperience();
  }

  download(){
    CvService.downloadFile(
      'http://localhost:4200/assets/data/GuiaParticipante.pdf',
      'PerezBrunoCV'
    );
  }

  openDialog() {
    this.dialog.open(DialogExperienceComponent, {
      width: "50%"
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllExperience()
      }
    })
  }

  getAllExperience(){
    this.api.getExperience().subscribe(data =>{
      this.misExperiencias = data;
    })
  }

  editExperience(experiencia : any){
    this.dialog.open(DialogExperienceComponent, {
      width: '50%',
      data : experiencia
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllExperience()
      }
    })
  }

  deleteExperience(id : number){
    this.api.deleteExperience(id)
    .subscribe({
      next : (res)=>{
        alert("Experiencia eliminada correctamente");
        this.getAllExperience();
      },
      error : ()=>{
        alert("Error al intentar eliminar la experiencia")
      }
    })
  }

}
