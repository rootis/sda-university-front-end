import { Component, OnInit } from '@angular/core';
import { University } from '../../types';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'numberOfStudyPrograms', 'numberOfModules', 'actions'];
  universities: University[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  delete(id: number) {
    this.universities = this.universities.filter(item => item.id !== id);
  }

  private load() {
    this.api.get('/universities').subscribe((data: University[]) => this.universities = data);
  }
}
