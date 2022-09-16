import { Component } from '@angular/core';
import {User} from "./model/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whosHome';
  users: User[];

  constructor() {
    let mara = new User("Mara");
    let fani = new User("Fani");
    let julia = new User("Julia");

    this.users = [mara, fani, julia];
  }

}
