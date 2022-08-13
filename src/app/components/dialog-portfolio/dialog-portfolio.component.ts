import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-portfolio',
  templateUrl: './dialog-portfolio.component.html',
  styleUrls: ['./dialog-portfolio.component.css']
})
export class DialogPortfolioComponent implements OnInit {

  portfolioForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.portfolioForm = this.formBuilder.group({
      urlImage : ['',[Validators.required]],
      alt: ['',[Validators.required]],
      title : ['',[Validators.required]],
      subtitle : ['',[Validators.required]],
      description : ['',[Validators.required]],
      urlProyecto : ['',[Validators.required]],
    })
  }

  addPortfolio(){

  }

}
