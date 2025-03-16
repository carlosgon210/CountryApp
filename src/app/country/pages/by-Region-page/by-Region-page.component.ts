import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { RestCountry } from '../../interfaces/rest-countries';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [CountryListComponent],
  templateUrl: './by-Region-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPageComponent {
  isLoading=signal(false);
    isError=signal<string|null>(null);
    countries=signal<RestCountry[]>([]);
 }
