import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/services/portfolio.service'


@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  misServicios:any;

  constructor(
    private datosPortfolio : PortfolioService
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe (data => {
      this.misServicios=data.study;
    });
  }


}
