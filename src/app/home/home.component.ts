import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { PopularComponent } from './popular/popular.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ContactUsComponent, ServicesComponent, TestimonyComponent, PopularComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
