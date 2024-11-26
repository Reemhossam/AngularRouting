import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../../Models/course';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit{
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router:Router = inject(Router);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }
  navigateToCourses(){
   this.router.navigate(['Courses'])
  }
}
