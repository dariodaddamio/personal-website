import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { AboutComponent } from './about/about.component';
import { ProgrammingComponent } from './programming/programming.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'graphic-design', component: GraphicDesignComponent },
    { path: 'about', component: AboutComponent },
    { path: 'programming', component: ProgrammingComponent },
];
