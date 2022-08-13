import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { DialogPortfolioComponent } from '../dialog-portfolio/dialog-portfolio.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

  misProyectos:any;

  constructor(
    private datosPortfolio : PortfolioService,
    private dialog : MatDialog) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.misProyectos=data.proyects;
    });
  }

  openDialog() {
    this.dialog.open(DialogPortfolioComponent, {
      width: "50%"
    });
  }

}
