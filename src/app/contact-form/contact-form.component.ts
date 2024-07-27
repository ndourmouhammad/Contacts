// import { Component } from '@angular/core';
// import { ContactService } from '.././contact.service';
// import { AuthService } from '.././auth.service';
// import { Contact } from '.././models/contact';
// import { Router } from '@angular/router';
// import { RouterModule, Routes } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-contact-form',
//   standalone: true,
//   imports: [FormsModule, CommonModule, RouterModule],
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.scss']
// })
// export class ContactFormComponent {
//   contact: Contact = {
//     id: '',
//     nom: '',
//     prenom: '',
//     email: '',
//     telephone: '',
//     etat: '',
//     createdAt: new Date(),
//     createdBy: '',
//     description: ''
//   };

//   constructor(private contactService: ContactService, private authService: AuthService, private router: Router) {}

//   saveContact(): void {
//     const currentUser = this.authService.getCurrentUser();
//     if (currentUser) {
//       this.contact.id = this.generateId();
//       this.contact.createdBy = currentUser.id;
//       this.contactService.addContact(this.contact);
//       this.router.navigate(['/contacts']);
//     }
//   }

//   generateId(): string {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   }
// }

import { Component } from '@angular/core';
import { ContactService } from '.././contact.service';
import { AuthService } from '.././auth.service';
import { Contact } from '.././models/contact';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contact: Contact = {
    id: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    etat: '',
    createdAt: new Date(),
    createdBy: '',
    description: ''
  };

  constructor(private contactService: ContactService, private authService: AuthService, private router: Router) {}

  saveContact(): void {
    console.log('saveContact appelé');
    const currentUser = this.authService.getCurrentUser();
    console.log('Utilisateur courant:', currentUser);
    if (currentUser) {
      this.contact.id = this.generateId();
      this.contact.createdBy = currentUser.id;
      console.log('Contact à sauvegarder:', this.contact);
      this.contactService.addContact(this.contact);
      this.router.navigate(['/contacts']).then(success => {
        if (success) {
          console.log('Navigation réussie !');
        } else {
          console.error('La navigation a échoué');
        }
      });
    } else {
      console.error('Aucun utilisateur courant trouvé');
    }
  }

  generateId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
