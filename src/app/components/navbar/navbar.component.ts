import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/services/portfolio.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  miNavbar:any;

  constructor(
    private datosPortfolio : PortfolioService
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe (data => {
      this.miNavbar=data;
    });
  }

}
