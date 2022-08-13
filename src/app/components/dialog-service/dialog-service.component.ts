import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-service',
  templateUrl: './dialog-service.component.html',
  styleUrls: ['./dialog-service.component.css']
})
export class DialogServiceComponent implements OnInit {

  serviceForm !: FormGroup;


  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.serviceForm = this.formBuilder.group({
      title : ['',[Validators.required]],
      school : ['',[Validators.required]],
      description : ['',[Validators.required]],
      dateStart : ['',[Validators.required]],
      dateEnd : ['',[Validators.required]],
      tools : ['',[Validators.required]],
      urlIcon : ['',[Validators.required]]
    })
  }

  addService(){
    
  }

}
