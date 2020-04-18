import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityListComponent } from './components/university-list/university-list.component';
import { StudyProgramListComponent } from './components/study-program-list/study-program-list.component';
import { UniversityComponent } from './components/university/university.component';

const routes: Routes = [
  {
    path: '',
    component: UniversityListComponent
  },
  {
    path: 'universities',
    component: UniversityListComponent
  }, {
    path: 'universities/:id',
    component: UniversityComponent
  }, {
    path: 'study-programs',
    component: StudyProgramListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
