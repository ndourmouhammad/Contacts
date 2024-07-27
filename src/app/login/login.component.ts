// import { Component } from '@angular/core';
// import { AuthService } from '.././auth.service';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
  
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   login(): void {
//     if (this.authService.login(this.email, this.password)) {
//       this.router.navigate(['/contacts']);
//     } else {
//       this.errorMessage = 'Email ou mot de passe incorrect';
//     }
//   }
// }
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/contacts']);
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
    }
  }
}

