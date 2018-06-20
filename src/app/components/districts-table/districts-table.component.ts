import { Component, OnInit, Input } from '@angular/core';
import { District } from '../../models/location';
import { LocationService } from '../../services/location.service';
import { HelperLocationService } from '../../services/helper.location.service';

@Component({
  selector: 'districts-table',
  templateUrl: './districts-table.component.html',
  styleUrls: ['./districts-table.component.css']
})
export class DistrictsTableComponent implements OnInit {

  fileData: string[];
  districts: District[];

  constructor(
    private locationService: LocationService,
    private helper: HelperLocationService
  ) { }

  ngOnInit() {
    this.locationService.readFile().subscribe( data => {
      this.fileData = this.helper.formatLocationFromFile(data);
      this.districts = this.helper.getDistricts(this.fileData);
    });
  }

}
