import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { SignupComponent } from './pages/signup/signup';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' },
];
