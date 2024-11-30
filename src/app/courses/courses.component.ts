import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
   coursesService = inject(CourseService);
   route:ActivatedRoute  = inject(ActivatedRoute)
   AllCourses: Course[];

   activeroute:ActivatedRoute = inject(ActivatedRoute);

   ngOnInit(): void {
      this.AllCourses=this.route.snapshot.data['courses'];

      this.activeroute.queryParamMap.subscribe((data)=>{
      if(data.get('search'))
         this.AllCourses=this.AllCourses.filter(t =>t.title.toLowerCase().includes(data.get('search').toLowerCase()));
      })
   }
}
