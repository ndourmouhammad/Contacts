import { Injectable } from '@angular/core';
import { User } from './models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { id: '1', email: 'utilisateur1@example.com', password: 'motdepasse' },
    { id: '2', email: 'utilisateur2@example.com', password: 'motdepasse' }
  ];
  private currentUserKey = 'currentUser';
  private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  public loggedIn$ = this.loggedInSubject.asObservable();

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.setCurrentUser(user);
      this.loggedInSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.loggedInSubject.next(false);
  }

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem(this.currentUserKey);
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }

  private setCurrentUser(user: User): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  private isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
