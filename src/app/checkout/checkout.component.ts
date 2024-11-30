import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  constructor (){
    //this.router.getCurrentNavigation().extras.state
  }
  activateRoute :ActivatedRoute = inject(ActivatedRoute);
  router :Router =inject(Router);
  course:Course=new Course;
  ngOnInit(): void {
    // this.activateRoute.data.subscribe((data)=>{
    //   this.course.title = data['name'];
    //   this.course.price = data['price'];
    // })
    // console.log(`name is: ${this.course.title }, price is ${this.course.price}`);
    this.course= history.state;
  }
  

}
