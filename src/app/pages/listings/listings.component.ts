import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Listings } from '../../models/listings';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  
  imageUrl = 'https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920';
  imageUrl1 = 'https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2020/04/unnamed-1-512x200.png';
  
  listingsList: Listings[] = [];
  filteredList: Listings[] = [];
  rentalTypes: string[] = [];
  rentalTypeControl = new FormControl('');

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.getListings();
  }

  getListings(): void {
    this.listingsService.getListings().subscribe((listingsList: Listings[]) => {
      this.listingsList = listingsList;
      this.filteredList = [...this.listingsList];
      this.extractRentalTypes();
    });
  }

  extractRentalTypes(): void {
    const types = new Set(this.listingsList.map(listing => listing.title));
    this.rentalTypes = Array.from(types);
  }

  onFilterChange(): void {
    const selectedType = this.rentalTypeControl.value;
    if (selectedType) {
      this.filteredList = this.listingsList.filter(listing => listing.title === selectedType);
    } else {
      this.filteredList = [...this.listingsList];
    }
  }
}
