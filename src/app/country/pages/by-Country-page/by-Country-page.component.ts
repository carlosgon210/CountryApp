import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { RestCountry } from '../../interfaces/rest-countries';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CountryListComponent,CountrySearchInputComponent],
  templateUrl: './by-Country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent {
isLoading=signal(false);
  isError=signal<string|null>(null);
  countries=signal<RestCountry[]>([]);
 

 }
