import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries-main',
  templateUrl: './countries-main.component.html',
  styleUrls: ['./countries-main.component.scss']
})
export class CountriesMainComponent implements OnInit {
  countriesData: any[] = [];
  totalCountries: number = 0;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(data => {
      this.countriesData = data.filter(country => country.region === 'Asia' && country.name.common !== 'Georgia' && country.name.common !== 'Hong Kong');
      this.totalCountries = this.countriesData.length;
    });
  }
}

