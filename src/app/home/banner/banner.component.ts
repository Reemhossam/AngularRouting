import { query } from '@angular/animations';
import { ɵnormalizeQueryParams } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  router:Router = inject(Router);
  onclick(value:any){
    this.router.navigate([`/Courses`],{queryParams:{'search':value}});
  }
}
