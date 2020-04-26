import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  viewProviders: [{
      provide: ControlContainer,
      useExisting: FormGroupDirective
  }]
})
export class InputComponent implements OnInit {

  tmp = true;

  @Input() field: AbstractControl;
  @Input() controlName: string;
  @Input() minlength: string;
  @Input() required: string;
  @Input() type: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }
}
