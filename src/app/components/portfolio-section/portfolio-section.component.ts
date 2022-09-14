import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { DialogPortfolioComponent } from '../dialog-portfolio/dialog-portfolio.component';


@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

  misProyectos:any;
  login : boolean = true;


  constructor(
    private dialog : MatDialog,
    private api : ApiService,
    private user : LoginService
    )  {
      this.user.stateUser().subscribe(res=>{
       if(res) {
         this.login = true;
         
       } else {
         this.login = false;
       }
      })
    }

  ngOnInit(): void {
    this.getAllWorks();

  }

  openDialog() {
    this.dialog.open(DialogPortfolioComponent, {
      width: "75%"
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllWorks();
      }
    })
  }

  getAllWorks(){
    this.api.getPortfolio().subscribe(data =>{
      this.misProyectos = data;
    })
  }

  editPortfolio(proyectos : any){
    this.dialog.open(DialogPortfolioComponent, {
      width: '75%',
      data : proyectos
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllWorks();
      }
    })
  }

  deleteWork(id : number){
    this.api.deletePortfolio(id)
    .subscribe({
      next : (res)=>{
        alert("Proyecto eliminado correctamente");
        this.getAllWorks();
      },
      error : ()=>{
        alert("Error al intentar eliminar el proyecto")
      }
    })
  }

}
