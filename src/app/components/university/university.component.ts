import { Component, Input, OnInit } from '@angular/core';
import { University } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  university: University;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.get('/universities/' + id).subscribe((data: University) => this.university = data);
  }
}
