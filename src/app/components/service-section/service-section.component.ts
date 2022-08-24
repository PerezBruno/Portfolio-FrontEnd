import { Component, OnInit } from '@angular/core';
import { DialogServiceComponent } from '../dialog-service/dialog-service.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  misServicios:any;
  login : boolean = true;


  constructor(
    private api : ApiService,
    private dialog : MatDialog,
    private user : LoginService

  ) {
    this.user.stateUser().subscribe(res=>{
     if(res) {
       this.login = true;
       
     } else {
       this.login = false;
     }
    })
  }

  ngOnInit(): void {
    this.getAllServices();
  }

  openDialog() {
    this.dialog.open(DialogServiceComponent, {
      width: "50%"
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllServices()
      }
    })
  }

  getAllServices(){
    this.api.getService().subscribe(data =>{
      this.misServicios = data;
    })
  }

  editServices(educacion : any){
    this.dialog.open(DialogServiceComponent, {
      width: '50%',
      data : educacion
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllServices()
      }
    })
  }


}
