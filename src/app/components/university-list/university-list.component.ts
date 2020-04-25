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
    const dialogRef = this.dialog.open(UniversityModalComponent, {
      width: '250px',
      data: university || {}
    });

    dialogRef.afterClosed().subscribe((data: University) => {
      if (data && data.id) {
        this.api.put(`/universities/${data.id}`, data).subscribe(
          (result: University) => this.universities = this.universities.map(u => u.id === result.id ? result : u)
        );
      } else if (data) {
        this.api.post('/universities', data).subscribe(
          (result: University) => this.universities = [...this.universities, result]
        );
      }
    });
  }

  private load() {
    this.api.get('/universities').subscribe((data: University[]) => this.universities = data);
  }
}
