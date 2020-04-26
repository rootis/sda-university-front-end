import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() id: number;
  @Input() isSelected: boolean;
  @Input() isSelectable: boolean;
  @Input() title: string;
  @Output() removeItem = new EventEmitter<number>();
  @Output() selectItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.selectItem.emit(this.id);
  }

  remove() {
    this.removeItem.emit(this.id);
  }
}
