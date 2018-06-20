import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../../models/location';
import { LocationService } from '../../services/location.service';
import { HelperLocationService } from '../../services/helper.location.service';

@Component({
  selector: 'departments-table',
  templateUrl: './departments-table.component.html',
  styleUrls: ['./departments-table.component.css']
})
export class DepartmentsTableComponent implements OnInit {

  fileData: string[];
  departments: Department[];

  constructor(
    private locationService: LocationService,
    private helper: HelperLocationService
  ) { }

  ngOnInit() {
    this.locationService.readFile().subscribe( data => {
      this.fileData = this.helper.formatLocationFromFile(data);
      this.departments = this.helper.getDepartments(this.fileData);
    });
  }

}
