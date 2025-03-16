import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/rest-countries';



const apiUrl="https://restcountries.com/v3.1";
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http=inject(HttpClient);


  searchByCapital(query:string){
    query=query.toLowerCase();
    return this.http.get<RestCountry[]>(`${apiUrl}/capital/${query}`);
    
  }
 

}
