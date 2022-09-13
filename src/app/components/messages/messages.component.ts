import { Component, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/interfaces/contact-form';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

messages : any;


  constructor(
    private contactServices : ContactFormService

  ) { }

  ngOnInit(): void {

    this.contactServices.getMessage().subscribe(mensajes =>{
      //console.log(mensajes)
      this.messages = mensajes;
    })
  }


  async onClikDelete(messages : ContactForm){
    const response = await this.contactServices.deleteMessage(messages);
    console.log(response);
  }

}
