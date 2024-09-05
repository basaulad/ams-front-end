import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { BookingComponent } from './pages/booking/booking.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'listings', component: ListingsComponent},
    {path: 'booking', component: BookingComponent}
];
