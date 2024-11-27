import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  courseId :number;
  selectedCourse:Course;
  activeRoute : ActivatedRoute = inject(ActivatedRoute);
  courseService :CourseService = inject(CourseService);
  route:Router = inject(Router);
  ngOnInit(): void {
    //this.courseId = this.activeRoute.snapshot.params['id'];
    //this.courseId = +this.activeRoute.snapshot.paramMap.get('id');

    // this.activeRoute.url.subscribe((data)=>{
    //   this.courseId = +data[2].path;
    //   this.selectedCourse = this.courseService.courses.find(x => x.id == this.courseId);
    // })
    this.activeRoute.paramMap.subscribe((data)=>{
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find(x => x.id == this.courseId);
    })
  }

}
