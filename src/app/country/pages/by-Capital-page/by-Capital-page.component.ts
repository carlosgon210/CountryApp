import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { RestCountry } from '../../interfaces/rest-countries';
import { CountryMappper } from '../../mapper/country.mapper';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-Capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent {

  countryService=inject(CountryService);
  
  isLoading=signal(false);
  isError=signal<string|null>(null);
  countries=signal<RestCountry[]>([]);



onSearch(query:string){
  if(this.isLoading())return;
  this.isLoading.set(true);
  this.isError.set(null);

  this.countryService.searchByCapital(query)
                      .subscribe((countries)=>{
                        this.isLoading.set(false);
                        this.countries.set(countries);
                        console.log(countries);
                      })
  
}

}
