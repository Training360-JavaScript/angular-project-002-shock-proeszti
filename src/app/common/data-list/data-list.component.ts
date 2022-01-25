import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input() dataList: User[] = [];
  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();
  clicked: any;


  constructor() { }

  ngOnInit(): void {
  }
  onSelectClick(dataRow): void {
    new this.selectClick();
  }
  onUpdateClick(dataRow): void {
    new this.updateClick();
  }
  onDeleteClick(dataRow): void {
    new this.deleteClick();
  }
}

