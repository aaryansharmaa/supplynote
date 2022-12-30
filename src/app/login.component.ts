import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  template: `
    <form (submit)="login()">
      <label>Username:</label>
      <input type="text" [(ngModel)]="username" name="username">
      <br>
      <label>Password:</label>
      <input type="password" [(ngModel)]="password" name="password">
      <br>
      <button type="submit">Log In</button>
    </form>
  `,
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  
  async login() {
    const result = await this.dataService.login(this.username, this.password);
    if (result) {
      console.log("hello")
      this.router.navigate(['/home']);
    }
  }
}