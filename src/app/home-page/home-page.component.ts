import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router) {}
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToGD() {
    this.router.navigate(['/graphic-design']);
  }
  navigateToAbout() {
    this.router.navigate(['/about']);
  }
  navigateToProgramming() {
    this.router.navigate(['/programming']);
  }
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
  // getYear(): number {
  //   return AppModule.getYear();
  // }
}


