import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {
  @Input() dataRow: User = new User;
  @Output() selectClick: EventEmitter<boolean>;
  @Output() updateClick: EventEmitter<boolean>;
  @Output() deleteClick: EventEmitter<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectClicked(): void {
    this.selectClick.emit(this.dataRow);
  }
  onUpdateClicked(): void {
    this.updateClick.emit(this.dataRow);
  }
  onDeleteClicked(): void {
    this.updateClick.emit(this.dataRow);
  }
}
