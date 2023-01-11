import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name: string;
  password: string;
  showMessage: boolean;

  constructor(private router: Router, private auth: AuthService) {
    this.name = '';
    this.password = '';
    this.showMessage = false;
  }
  message = 'User or Password incorrect';
  checkLogin() {
    const result = this.auth.login(this.name, this.password);
    if (result === true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.showMessage = true;
    }
  }
}
