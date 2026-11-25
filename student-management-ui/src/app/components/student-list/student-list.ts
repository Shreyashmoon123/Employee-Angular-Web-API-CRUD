
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudent().subscribe({
      next: (data) => {
        this.students = data;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error fetching students:', error);
      }
    });
  }

  deleteStudent(id: number): void {

    const confirmDelete = confirm('Are you sure you want to delete this student?');

    if (!confirmDelete) {
      return;
    }

    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        alert('Student deleted successfully!');
        this.loadStudents();
      },
      error: (error) => {
        console.error('Error deleting student:', error);
        alert('Failed to delete student.');
      }
    });
  }
}
