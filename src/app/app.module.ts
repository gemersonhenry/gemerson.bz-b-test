import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationService } from './services/location.service';
import { HelperLocationService } from './services/helper.location.service';
import { DepartmentsTableComponent } from './components/departments-table/departments-table.component';
import { ProvincesTableComponent } from './components/provinces-table/provinces-table.component';
import { DistrictsTableComponent } from './components/districts-table/districts-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentsTableComponent,
    ProvincesTableComponent,
    DistrictsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    LocationService,
    HelperLocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
