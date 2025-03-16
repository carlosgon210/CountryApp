import { Routes } from "@angular/router"
import { ByCapitalPageComponent } from "./pages/by-Capital-page/by-Capital-page.component";
import { CountryLayoutComponent } from "./layouts/countryLayout/countryLayout.component";
import { ByCountryPageComponent } from "./pages/by-Country-page/by-Country-page.component";
import { ByRegionPageComponent } from "./pages/by-Region-page/by-Region-page.component";
import { CountryPageComponent } from "./pages/country-page/country-page.component";

export const countryRoutes: Routes = [
    {
        path:"",
       component:CountryLayoutComponent,
       children:[{
        path: 'by-capital',
        component: ByCapitalPageComponent
       },
       {
        path: 'by-country',
        component: ByCountryPageComponent
       },
       {
        path: 'by-region',
        component: ByRegionPageComponent
       },{
        path:'by/:code',
        component: CountryPageComponent
        },{
        path:'**',
        redirectTo:'by-capital'
        },],
    },   
];
export default countryRoutes;