import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { DialogHomeComponent } from '../dialog-home/dialog-home.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  miPortfolio:any;

  constructor(
    private datosPortfolio : PortfolioService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio=data;
    });
  }

  openDialog() {
    this.dialog.open(DialogHomeComponent, {
      width: "50%"
    });
  }

}
