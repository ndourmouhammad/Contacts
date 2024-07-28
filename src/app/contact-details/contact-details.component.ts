import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

 
  ngOnInit(): void {
  const contactId = this.route.snapshot.paramMap.get('id');
  if (contactId) {
    this.contact = this.contactService.getContactById(contactId) || null;
    console.log('Détails du contact:', this.contact); // Vérifiez si updatedAt est bien présent
  }
}
  

  goBack(): void {
    this.router.navigate(['/contacts']);
  }
}

