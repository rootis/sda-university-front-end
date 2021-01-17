import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  @Input() url: string;
  @Input() key: string;

  list;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get(this.url).subscribe((data) => this.list = data);
  }

}
