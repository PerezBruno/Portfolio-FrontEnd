import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/services/portfolio.service'
import { DialogServiceComponent } from '../dialog-service/dialog-service.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  misServicios:any;

  constructor(
    private datosPortfolio : PortfolioService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe (data => {
      this.misServicios=data.study;
    });
  }

  openDialog() {
    this.dialog.open(DialogServiceComponent, {
      width: "50%"
    });
  }



}
