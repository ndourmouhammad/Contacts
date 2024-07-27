// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ContactService } from '.././contact.service';
// import { AuthService } from '.././auth.service';
// import { Contact } from '.././models/contact';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';

// @Component({
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   selector: 'app-contact-list',
//   templateUrl: './contact-list.component.html',
//   styleUrls: ['./contact-list.component.scss']
// })
// export class ContactListComponent implements OnInit {
//   contacts: Contact[] = [];
//   @Output() selectContact = new EventEmitter<Contact>();

//   constructor(private contactService: ContactService, private authService: AuthService) {}

//   ngOnInit(): void {
//     const currentUser = this.authService.getCurrentUser();
//     if (currentUser) {
//       this.contacts = this.contactService.getContacts(currentUser.id);
//     }
//   }

//   onSelect(contact: Contact): void {
//     this.selectContact.emit(contact);
//   }

//   deleteContact(contactId: string): void {
//     this.contactService.deleteContact(contactId);
//     this.ngOnInit(); // Recharge les contacts après suppression
//   }
// }


// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ContactService } from '../contact.service';
// import { AuthService } from '../auth.service';
// import { Contact } from '../models/contact';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   selector: 'app-contact-list',
//   templateUrl: './contact-list.component.html',
//   styleUrls: ['./contact-list.component.scss']
// })
// export class ContactListComponent implements OnInit {
//   contacts: Contact[] = [];
//   @Output() selectContact = new EventEmitter<Contact>();

//   constructor(private contactService: ContactService, private authService: AuthService) {}

//   ngOnInit(): void {
//     const currentUser = this.authService.getCurrentUser();
//     if (currentUser) {
//       this.contacts = this.contactService.getContacts(currentUser.id);
//       console.log(this.contacts); // Vérifiez si les contacts sont bien récupérés
//     }
//   }

//   onSelect(contact: Contact): void {
//     console.log('Contact sélectionné:', contact); // Vérifiez que le contact est bien sélectionné
//     this.selectContact.emit(contact);
//   }

//   deleteContact(contactId: string): void {
//     console.log('Suppression du contact avec ID:', contactId); // Vérifiez que l'ID est bien passé
//     this.contactService.deleteContact(contactId);
//     this.ngOnInit(); // Recharge les contacts après suppression
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { AuthService } from '../auth.service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.contacts = this.contactService.getContacts(currentUser.id);
      console.log(this.contacts); // Vérifiez si les contacts sont bien récupérés
    }
  }

  editContact(id: string) {
    this.router.navigate(['/edit-contact', id]);
  }
  onSelect(contact: Contact): void {
    this.router.navigate(['/contact-details', contact.id]); // Navigue vers les détails du contact
  }

  deleteContact(contactId: string): void {
    console.log('Suppression du contact avec ID:', contactId); // Vérifiez que l'ID est bien passé
    this.contactService.deleteContact(contactId);
    this.ngOnInit(); // Recharge les contacts après suppression
  }
}
