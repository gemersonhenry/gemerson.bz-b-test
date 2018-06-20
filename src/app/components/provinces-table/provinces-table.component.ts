import { Component, OnInit, Input } from '@angular/core';
import { Province } from '../../models/location';
import { LocationService } from '../../services/location.service';
import { HelperLocationService } from '../../services/helper.location.service';

@Component({
  selector: 'provinces-table',
  templateUrl: './provinces-table.component.html',
  styleUrls: ['./provinces-table.component.css']
})
export class ProvincesTableComponent implements OnInit {

  fileData: string[];
  provinces: Province[];

  constructor(
    private locationService: LocationService,
    private helper: HelperLocationService
  ) { }

  ngOnInit() {
    this.locationService.readFile().subscribe( data => {
      this.fileData = this.helper.formatLocationFromFile(data);
      this.provinces = this.helper.getProvinces(this.fileData);
    });
  }

}
