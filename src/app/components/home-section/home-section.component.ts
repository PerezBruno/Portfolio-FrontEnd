import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DialogHomeComponent } from '../dialog-home/dialog-home.component';


@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {

  miPortfolio:any;

  constructor(
    private dialog : MatDialog,
    private api : ApiService
    ) { }

  ngOnInit(): void {
   this.getAllUsers();
  }

  openDialog() {
    this.dialog.open(DialogHomeComponent, {
      width: "50%"
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllUsers();
      }
    })
  }

  getAllUsers(){
    this.api.getUser().subscribe(data =>{
      this.miPortfolio = data;
    })
  }

  editUser(miPortfolio : any){
    this.dialog.open(DialogHomeComponent, {
      width: '50%',
      data : miPortfolio
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllUsers();
      }
    })
  }

  deleteUser(id : number){
    this.api.deleteUser(id)
    .subscribe({
      next : (res)=>{
        alert("Usuario eliminado correctamente");
        this.getAllUsers();
      },
      error : ()=>{
        alert("Error al intentar eliminar el usuario")
      }
    })
  }

}
