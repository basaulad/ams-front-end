import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  isConfirmed = false; 

  confirmBooking(): void {
    console.log('confirming booking...');
    console.log('creating booking report');
    this.isConfirmed = true; 
  }
}
