import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';

@Component({
  selector: 'app-country-layout',
  standalone: true,
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './countryLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryLayoutComponent { }
