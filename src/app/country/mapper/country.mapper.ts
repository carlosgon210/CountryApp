import type{ RestCountry } from '../interfaces/rest-countries';
import type{ Country } from '../interfaces/country';
export class CountryMappper{
//static RestCountry=>country

    static mapRestCountryToCountry(restCountry:RestCountry) :Country {
        return{
            capital:restCountry.capital.join(','),
            cca2:restCountry.cca2,
            flag:restCountry.flag,
            flagSvg:restCountry.flags.svg,
            name:restCountry.name.common,
            papulation:restCountry.population,
        };
    }

    static mapRestCountryArrayToCountryArray(
        restCountries:RestCountry[]
    ):Country[]{
        return restCountries.map(this.mapRestCountryToCountry);
    }



}