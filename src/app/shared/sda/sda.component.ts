import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sda',
  templateUrl: './sda.component.html',
  styleUrls: ['./sda.component.css']
})
export class SdaComponent implements OnInit {

  @Input() amount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
