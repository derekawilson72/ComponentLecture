import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentLecture';

  contacts:Contact[] = [

    {name:"Abe",
     email:"abe@youmail.com",
     image:"https://i.pravatar.cc/150?img=1",
     nodelete: true
    },

    {
      name: "Ben",
      email: "ben@youmail.com",
      image: "https://i.pravatar.cc/150?img=2",
      nodelete: false
    }
  ];

  addNewContact(newContact:Contact):void{

    this.contacts.push(newContact);    

  }

  deleteContact(contact:Contact):void{
    let index:number = this.contacts.findIndex(c => 
      (c.name==contact.name) && 
      (c.email==contact.email) &&
      (c.image==contact.image)
    );
    

  }
  


}
