// import { Component } from '@angular/core';
// import { AuthService } from './auth.service';
// import { Contact } from './models/contact';
// import { LoginComponent } from './login/login.component';
// import { TrashComponent } from './trash/trash.component';
// import { ContactDetailsComponent } from './contact-details/contact-details.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';
// import { ContactListComponent } from './contact-list/contact-list.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [LoginComponent, TrashComponent, ContactDetailsComponent, ContactFormComponent, ContactListComponent, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   isLoggedIn: boolean = false;
//   isAddingContact: boolean = false;
//   selectedContact: Contact | null = null;
//   isViewingTrash: boolean = false;

//   constructor(private authService: AuthService) {}

//   onLoginSuccess(): void {
//     this.isLoggedIn = true;
//   }

//   onSelectContact(contact: Contact): void {
//     this.selectedContact = contact;
//   }

//   onContactSaved(): void {
//     this.isAddingContact = false;
//   }

//   showAddContactForm(): void {
//     this.isAddingContact = true;
//   }

//   viewTrash(): void {
//     this.isViewingTrash = true;
//   }

//   hideTrash(): void {
//     this.isViewingTrash = false;
//   }
// }


// import { Component } from '@angular/core';
// import { AuthService } from './auth.service';
// import { Contact } from './models/contact';
// import { Router } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { TrashComponent } from './trash/trash.component';
// import { ContactDetailsComponent } from './contact-details/contact-details.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';
// import { ContactListComponent } from './contact-list/contact-list.component';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     // Assurez-vous que les composants sont importés ici
//     CommonModule, LoginComponent, TrashComponent, ContactDetailsComponent, ContactFormComponent, ContactListComponent, RouterOutlet 
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   isLoggedIn: boolean = false;
//   isAddingContact: boolean = false;
//   selectedContact: Contact | null = null;
//   isViewingTrash: boolean = false;

//   constructor(private authService: AuthService, private router: Router) {
//     this.checkLoginStatus();
//   }

//   private checkLoginStatus(): void {
//     this.isLoggedIn = !!this.authService.getCurrentUser();
//   }

//   onLoginSuccess(): void {
//     this.isLoggedIn = true;
//     this.router.navigate(['/contacts']);
//   }

//   onSelectContact(contact: Contact): void {
//     this.selectedContact = contact;
//   }

//   onContactSaved(): void {
//     this.isAddingContact = false;
//   }

//   showAddContactForm(): void {
//     this.isAddingContact = true;
//   }

//   viewTrash(): void {
//     this.isViewingTrash = true;
//   }

//   hideTrash(): void {
//     this.isViewingTrash = false;
//   }

//   logout(): void {
//     this.authService.logout();
//     this.isLoggedIn = false;
//     this.router.navigate(['/login']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { TrashComponent } from './trash/trash.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactListComponent,
    TrashComponent,
    ContactDetailsComponent,
    ContactFormComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn) {
        this.router.navigate(['/contacts']);  // Optionnel: redirigez l'utilisateur vers Contacts après connexion
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
// const routes: Routes = [
//   { path: 'contacts', component: ContactListComponent },
//   { path: 'trash', component: TrashComponent },
//   { path: 'contact-details/:id', component: ContactDetailsComponent },
//   { path: 'add-contact', component: ContactFormComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: '**', redirectTo: '/login' }
// ];
