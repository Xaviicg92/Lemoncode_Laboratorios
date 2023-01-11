import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string;
  password: string;
  logBool: boolean;

  constructor() {
    this.username = 'master8@lemoncode.net';
    this.password = '12345678';
    this.logBool = false;
  }

  login(username: string, password: string): boolean {
    console.log(this.logBool);
    if (this.username === username && this.password === password) {
      return (this.logBool = true);
    } else {
      return (this.logBool = false);
    }
  }

  logout(): void {
    this.logBool = false;
  }

  isLogged(): boolean {
    return this.logBool;
  }

  getUsername(): string {
    return this.username;
  }
}
