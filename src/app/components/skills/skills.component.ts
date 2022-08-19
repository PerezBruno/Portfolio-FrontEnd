import { Component, OnInit } from '@angular/core';
import { DialogSkillsComponent } from '../dialog-skills/dialog-skills.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  misSkills:any;


  constructor(
    private api : ApiService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllSkills();
  }

  openDialog() {
    this.dialog.open(DialogSkillsComponent, {
      width: "50%"
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllSkills()
      }
    })
  }

  getAllSkills(){
    this.api.getSkills().subscribe(data =>{
      this.misSkills = data;
    })
  }

  editSkills(habilidad : any){
    this.dialog.open(DialogSkillsComponent, {
      width: '50%',
      data : habilidad
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllSkills()
      }
    })

  }

  deleteSkill(id : number){
    this.api.deleteSkills(id)
    .subscribe({
      next : (res)=>{
        alert("Habiliad eliminada correctamente");
        this.getAllSkills();
      },
      error : ()=>{
        alert("Error al intentar eliminar la actividad")
      }
    })
  }

  onDropped(event: CdkDragDrop<any>){
    moveItemInArray(this.misSkills, event.previousIndex, event.currentIndex);
  }

}