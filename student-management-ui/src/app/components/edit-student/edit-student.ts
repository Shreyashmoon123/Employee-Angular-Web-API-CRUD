
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css'
})
export class EditStudent implements OnInit {

  studentId!: number;

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadStudent();
  }

  loadStudent(): void {
    this.studentService.getStudentById(this.studentId).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (error) => {
        console.error('Error fetching student:', error);
        alert('Failed to load student.');
      }
    });
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.studentId, this.student).subscribe({
      next: () => {
        alert('Student updated successfully!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error updating student:', error);
        alert('Failed to update student.');
      }
    });
  }
}
