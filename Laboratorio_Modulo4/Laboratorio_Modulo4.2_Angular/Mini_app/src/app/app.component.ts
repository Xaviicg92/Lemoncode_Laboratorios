import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthService) {}

  checkState() {
    return this.auth.logBool;
  }

  title = 'Mini_app';
}
