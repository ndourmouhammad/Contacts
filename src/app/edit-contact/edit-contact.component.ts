import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contact = this.contactService.getContactById(id);
    }
  }

  saveContact(): void {
    if (this.contact) {
      this.contactService.updateContact(this.contact);
      this.router.navigate(['/contacts']);
      this.contact.updatedAt = new Date();
    }
  }
}
