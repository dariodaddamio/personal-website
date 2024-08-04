import { Component } from '@angular/core';
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
}
