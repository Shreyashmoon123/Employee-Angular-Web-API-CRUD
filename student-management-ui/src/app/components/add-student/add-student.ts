
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {

  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    age: 0
  };

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  addStudent(): void {

    this.studentService.addStudent(this.student).subscribe({
      next: () => {
        alert('Student added successfully!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error adding student:', error);
        alert('Failed to add student.');
      }
    });

  }
}
