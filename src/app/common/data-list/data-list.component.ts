import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input() dataList: User[] = [];
  @Output() selectClick: EventEmitter<boolean>;
  @Output() updateClick!: EventEmitter<boolean>;
  @Output() deleteClick!: EventEmitter<boolean>;
  clicked: any;


  constructor() { }

  ngOnInit(): void {
  }
  onSelectClick(): void {
    this.selectClick(dataRow);
  }
  onUpdateClick(): void {
    this.updateClick(dataRow);
  }
  onDeleteClick(): void {
    this.deleteClick(dataRow);
  }
}
function dataRow(dataRow: any) {
  throw new Error('Function not implemented.');
}

