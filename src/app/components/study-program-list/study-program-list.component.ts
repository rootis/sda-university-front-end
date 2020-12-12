import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-study-program-list',
  templateUrl: './study-program-list.component.html',
  styleUrls: ['./study-program-list.component.css']
})
export class StudyProgramListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'universityCode', 'numberOfModules', 'actions'];
  studyPrograms: StudyProgram[] = [
    {
      id: 1,
      title: 'Study Program 1',
      universityCode: 'KTU',
      modules: []
    },
    {
      id: 2,
      title: 'Spring',
      universityCode: 'SDA',
      modules: []
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
  }
}
