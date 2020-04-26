import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { University } from '../../types';
import { ApiService } from '../../services/api.service';
import { Module, StudyProgram } from '../../types/types';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  university: University;
  isAddingStudyProgram: boolean;
  newStudyProgramTitle: string;
  selectedStudyProgramId: number;
  modules: Module[];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.get('/universities/' + id).subscribe((data: University) => this.university = data);
  }

  selectStudyProgram(id: number) {
    this.selectedStudyProgramId = id;
    const moduleIdsMap = {};
    this.university.studyPrograms.find(sp => sp.id === id).modules.forEach(mId => moduleIdsMap[mId] = true);
    this.modules = this.university.modules.filter(m => moduleIdsMap[m.id]);
  }

  switchAddStudyProgram() {
    this.isAddingStudyProgram = !this.isAddingStudyProgram;
    if (!this.isAddingStudyProgram) {
      this.newStudyProgramTitle = '';
    }
  }

  addStudyProgram() {
    let maxId = -1;
    this.university.studyPrograms.forEach(sp => maxId = maxId < sp.id ? sp.id : maxId);
    const newStudyProgram = {
      id: maxId + 1,
      title: this.newStudyProgramTitle,
      modules: []
    };
    this.university.studyPrograms = [...this.university.studyPrograms, newStudyProgram];
    this.switchAddStudyProgram();
    console.log(this.university.studyPrograms);
  }

  removeStudyProgram(id: number) {
    if (this.selectedStudyProgramId === id) {
      this.selectedStudyProgramId = null;
      this.modules = null;
    }

    this.university.studyPrograms = this.university.studyPrograms.filter(sp => sp.id !== id);
  }
}
