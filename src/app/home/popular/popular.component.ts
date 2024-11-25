import { Component, inject, OnInit } from '@angular/core';
import { CoursesComponent } from '../../courses/courses.component';
import { CourseService } from '../../Services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit{
  courseService = inject(CourseService)
  popularCourses: CoursesComponent[] = [];

  ngOnInit(){
    //this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }
}
