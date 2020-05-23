import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from '../../services/api.service';
import { UniversityModalComponent } from '../university-modal/university-modal.component';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  private static URL = '/api/universities';

  displayedColumns: string[] = ['position', 'title', 'numberOfStudyPrograms', 'numberOfModules', 'actions'];
  universities: University[] = [];

  constructor(private api: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.load();
  }

  delete(id: number) {
    this.api.delete(UniversityListComponent.URL + '/' + id).subscribe(
      () => this.universities = this.universities.filter(item => item.id !== id)
    );
  }

  openDialog(university?: University) {
    const dialogRef = this.dialog.open(UniversityModalComponent, {
      width: '250px',
      data: university || {}
    });

    dialogRef.afterClosed().subscribe((savedUniversity: University) => {
      const existingIndex = this.universities.findIndex(u => u.id === savedUniversity.id);

      this.universities = existingIndex ?
        this.universities.map(u => u.id === savedUniversity.id ? savedUniversity : u) :
        this.universities = [...this.universities, savedUniversity];
    });
  }

  private load() {
    this.api.get(UniversityListComponent.URL).subscribe((data: University[]) => this.universities = data);
  }
}
