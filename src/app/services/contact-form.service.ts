import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import  {ContactForm}  from '../interfaces/contact-form'

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private firestore:Firestore) { }

  addMessage(contact : ContactForm){
    const contactRef = collection(this.firestore, 'messages');
      return addDoc(contactRef, contact);
  }

  getMessage(): Observable<ContactForm[]> {
    const contactRef = collection(this.firestore, 'messages');
    return collectionData(contactRef,{idField: 'id'}) as Observable<ContactForm[]>;
  }

  deleteMessage(contact : ContactForm){
    const contactRefDoc = doc(this.firestore, `messages/${contact.id}`);
    return deleteDoc(contactRefDoc);
  }
}
