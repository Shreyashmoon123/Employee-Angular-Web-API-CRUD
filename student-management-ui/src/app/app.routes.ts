
import { Routes } from '@angular/router';

import { StudentList } from './components/student-list/student-list';
import { AddStudent } from './components/add-student/add-student';
import { EditStudent } from './components/edit-student/edit-student';

export const routes: Routes = [
  { path: '', component: StudentList },
  { path: 'add-student', component: AddStudent },
  { path: 'edit-student/:id', component: EditStudent }
];
