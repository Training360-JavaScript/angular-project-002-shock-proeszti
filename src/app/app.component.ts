import { User } from 'src/app/model/user';
import { User } from 'src/app/model/user';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  @Input() userList: User[] = [];
  @Input() currentUser: User[] = [];

  @Output() selecktUser: EventEmitter<User> = new EventEmitter();
  @Output() updateUser: EventEmitter<UserService> = new EventEmitter();
  @Output() removeUser: EventEmitter<UserService> = new EventEmitter();
  @Output() changePhrase: EventEmitter<User> = new EventEmitter();

  onselecktUser(User): void {
    new this.selecktUser();
  }
  onupdateUser(dataRow): void {
    new this.updateUser();
  }
  onremoveUser(dataRow): void {
    new this.removeUser();
  }
  onChangePhrase(): void {
    new this.changePhrase();
  }

  // joey = {
  //   name: "Joe"
  // };

  // basketballEvents = [
  //   {
  //     location: "Szeged"
  //   },
  //   {
  //     location: "Budapest"
  //   }
  // ];

  constructor() { }

}
