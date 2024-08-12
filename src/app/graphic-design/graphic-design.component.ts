import { Component, HostListener } from '@angular/core';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphic-design',
  standalone: true,
  imports: [],
  templateUrl: './graphic-design.component.html',
  styleUrl: './graphic-design.component.css'
})
export class GraphicDesignComponent {
  constructor(private router: Router) {}
  getYear(): number {
    return AppModule.getYear();
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  lastScrollTop = 0;
  scrollTimeout: any;

  // Hide Navbar on Scroll Down and Show on Scroll Up
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.nav') as HTMLElement;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scroll down
      navbar.style.top = '-5vw'; // Adjusted based on  navbar height
      clearTimeout(this.scrollTimeout);
    } else {
      // Scroll up
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        navbar.style.top = '0';
      }, 130); // Delay for reappear 
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }
}
