import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs';
import { BarberService } from './core/services/barber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  barberList: any[] = [];

  constructor(private barberService: BarberService) {}

  ngOnInit(): void {
    this.barberService.getAllBarbers().subscribe((value) => {
      console.log(value);
      this.barberList = value;
    });
  }

  addNewBarber() {
    this.barberService.createNewBarber({ name: 'Tino', age: 24 });
  }

  deleteBarber(key: string) {
    console.log(key);
    this.barberService.deleteBarber(key);
  }

  title = 'barber-reservation-manager';
}
