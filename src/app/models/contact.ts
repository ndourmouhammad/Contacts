export interface Contact {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  description: string;
  image?: string;
}
