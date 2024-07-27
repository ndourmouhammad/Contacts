import { Component, OnInit } from '@angular/core';
import { ContactService } from '.././contact.service';
import { Contact } from '.././models/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trash',
  standalone  : true,
  imports: [CommonModule],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit {
  trash: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.trash = this.contactService.getTrash();
  }

  restoreContact(contactId: string): void {
    this.contactService.restoreContact(contactId);
    this.ngOnInit(); // Recharge les contacts après restauration
  }
}
