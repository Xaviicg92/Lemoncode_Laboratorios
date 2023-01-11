import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.scss'],
})
export class HeaderPrivateComponent {
  name: string;
  constructor(private auth: AuthService) {
    this.name = this.auth.getUsername();
  }

  onClick() {
    this.auth.logBool = false;
  }
}
