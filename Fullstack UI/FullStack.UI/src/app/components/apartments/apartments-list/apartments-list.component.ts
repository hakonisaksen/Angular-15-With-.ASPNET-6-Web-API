import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/models/apartment.model';
import { ApartmentsService } from 'src/app/services/apartments.service';

@Component({
  selector: 'app-apartments-list',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.css']
})
export class ApartmentsListComponent implements OnInit {

  apartments: Apartment [] = [];
  constructor(private apartmentsService: ApartmentsService) { }

  ngOnInit(): void {
     this.apartmentsService.getAllApartments()
     .subscribe({
        next: (apartments) => {
          this.apartments = apartments;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}

