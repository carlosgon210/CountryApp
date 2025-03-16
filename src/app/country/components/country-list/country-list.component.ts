import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RestCountry } from '../../interfaces/rest-countries';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [],
  templateUrl: './country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent { 

  countries=input.required<RestCountry[]>();


}
