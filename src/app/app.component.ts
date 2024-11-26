import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './Services/course.service';
import { ServicesService } from './Services/services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    RouterOutlet, HeaderComponent, FooterComponent, CoursesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    CourseService,ServicesService
  ]
})
export class AppComponent {
  title = 'AngularRouting';
}
