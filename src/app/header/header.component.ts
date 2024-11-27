import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  route:ActivatedRoute= inject(ActivatedRoute);
  ngOnInit() {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment)
        this.JumbToSection(fragment);
    });
  }
  JumbToSection(section){
      document.getElementById(section).scrollIntoView({behavior:'smooth'});
  }

}
