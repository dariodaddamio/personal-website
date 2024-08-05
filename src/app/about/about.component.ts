import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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
  getYear(): number {
    return AppModule.getYear();
  }
}
