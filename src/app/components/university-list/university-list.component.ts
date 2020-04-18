import { Component, OnInit } from '@angular/core';
import { University } from '../../types';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'numberOfStudyPrograms', 'numberOfModules', 'actions'];
  universities: University[] = [];

  constructor() { }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.universities = [
      {
        id: 1,
        title: 'KTU',
        numberOfStudyProgrms: 37,
        numberOfModules: 48
      },
      {
        id: 2,
        title: 'VGTU',
        numberOfStudyProgrms: 31,
        numberOfModules: 44
      }
    ];
  }
}
