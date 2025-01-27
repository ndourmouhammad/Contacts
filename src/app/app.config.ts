import { Route, provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { TrashComponent } from './trash/trash.component';

const routes: Route[] = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'add-contact', component: ContactFormComponent },
  { path: 'contact-details/:id', component: ContactDetailsComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};




