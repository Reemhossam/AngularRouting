import { Component, inject } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,CourseDetailComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
   coursesService = inject(CourseService);
   AllCourses: Course[] = this.coursesService.courses;
}
