import { Component, Input, OnInit } from '@angular/core';
import { University } from '../../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  id: string;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }
}
