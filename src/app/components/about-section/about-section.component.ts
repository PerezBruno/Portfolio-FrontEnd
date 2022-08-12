import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  miPortfolio :any;

  constructor(
    private datosPortfolio : PortfolioService
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio=data;
    });
  }

  download(){
    CvService.downloadFile(
      'http://localhost:4200/assets/data/GuiaParticipante.pdf',
      'PérezBrunoCV'
    );
  }

}
