import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  miPortfolio:any;


  constructor(
    private dialog : MatDialog,
    //private api : ApiService
  ) { }

  ngOnInit(): void {
  }

  // openDialog() {
  //   this.dialog.open(DialogHomeComponent, {
  //     width: "50%"
  //   });
  // }

  // getAllUsers(){
  //   this.api.getUser().subscribe(data =>{
  //     this.miPortfolio = data;
  //   })
  // }

  // editUser(miPortfolio : any){
  //   this.dialog.open(DialogHomeComponent, {
  //     width: '50%',
  //     data : miPortfolio
  //   }).afterClosed().subscribe(val=>{
  //     if(val==='update'){
  //       this.getAllUsers();
  //     }
  //   })
  // }

}
