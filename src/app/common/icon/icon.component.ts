import { Component, Input, OnInit } from '@angular/core';

// class User {
//   name: string = "";
// }

// class Event {
//   location: string = "";
// }

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {


  @Input() icon: string = "";


  // @Input() user: User = new User();
  // @Input() events: Event[] = [];

  // @Input() text2: string = '';

  constructor() { }

  ngOnInit(): void {
    // console.log(this.user);
  }

}
