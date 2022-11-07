import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../models/contact';
import { Picture } from '../../models/picture';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {

  @Output() newContact = new EventEmitter<Contact>();

  contact:Contact = {} as Contact;

  pictures:Picture[] = [
    {name:"Women"  , url: "https://i.pravatar.cc/150?img=1"},
    {name:"man", url: "https://i.pravatar.cc/150?img=17"},

  ];

  constructor() { 

  }

  ngOnInit(): void {
  }

  addContact(): void {
    let result:Contact = { ...this.contact };
    this.newContact.emit(result);
    this.contact = {} as Contact;
  }



}


