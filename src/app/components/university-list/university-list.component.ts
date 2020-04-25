import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from '../../services/api.service';
import { University } from '../../types';
import { UniversityModalComponent } from '../university-modal/university-modal.component';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'numberOfStudyPrograms', 'numberOfModules', 'actions'];
  universities: University[] = [];

  constructor(private api: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.load();
  }

  delete(id: number) {
    this.universities = this.universities.filter(item => item.id !== id);
  }

  openDialog(university?: University) {
    this.dialog.open(UniversityModalComponent, {
      width: '250px',
      data: university || {}
    });
  }

  private load() {
    this.api.get('/universities').subscribe((data: University[]) => this.universities = data);
  }
}
