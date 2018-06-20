import { Injectable } from '@angular/core';
import { Department, Province, District } from '../models/location';

@Injectable()
export class HelperLocationService {

  constructor() { }

  formatLocationFromFile (text: any): string[] {
    const data = `${text}`.split('\n');
    let dataTemp = data.map( e => e.split('"').join(''));
    let newData = [];
    for (let index = 0; index < dataTemp.length; index++) {
      if ( dataTemp[index].trim() !== '' ) {
        newData.push(dataTemp[index]);
      }
    }
    return newData;
  }

  getDepartments (data: string[]): Department[] {
    let departments = [];
    for (let k = 0; k < data.length; k++) {
      let current = data[k].split('/');
      if ( departments.length > 0) {
        let count = 0;
        for (let i = 0; i < departments.length; i++) {
          if ( departments[i] === current[0].trim() ) {
            count++;
          }
        }
        if ( count === 0 && current[0].trim() !== '' ) {
          departments.push(current[0].trim());
        }
      } else {
        departments.push(current[0].trim());
      }
    }
    return departments.map( department => this.setJSONFormat(department));
  }

  getProvinces (data: string[]): Province[] {
    let provinces = [];
    for (let k = 0; k < data.length; k++) {
      let current = data[k].split('/');
      if ( current[1].trim() !== '' ) {
          if ( provinces.length > 0) {
          let count = 0;
          for (let i = 0; i < provinces.length; i++) {
            if ( provinces[i] === `${current[0].trim()},${current[1].trim()}` ) {
              count++;
            }
          }
          if ( count === 0 ) {
            provinces.push(`${current[0].trim()},${current[1].trim()}`);
          }
        } else {
          provinces.push(`${current[0].trim()},${current[1].trim()}`);
        }
      }
    }
    return provinces.map( province => this.setJSONFormat(province));
  }

  getDistricts (data: string[]): District[] {
    let districts = [];
    for (let k = 0; k < data.length; k++) {
      let current = data[k].split('/');
      if ( current[2].trim() !== '' ) {
          if ( districts.length > 0) {
          let count = 0;
          for (let i = 0; i < districts.length; i++) {
            if ( districts[i] === `${current[1].trim()},${current[2].trim()}` ) {
              count++;
            }
          }
          if ( count === 0 ) {
            districts.push(`${current[1].trim()},${current[2].trim()}`);
          }
        } else {
          districts.push(`${current[1].trim()},${current[2].trim()}`);
        }
      }
    }
    return districts.map( district => this.setJSONFormat(district));
  }

  setJSONFormat (e: string): any  {
    const arr = e.split(',');
    // si tiene un solo elemento entonces es departamento
    if ( arr.length === 1) {
      let obj = <Department> {};
      let temp = arr[0].split(' ');
      obj.currentCode = temp[0];
      obj.currentName = temp[1];
      return obj;
    }
    if ( arr.length === 2 ) {
      let obj = <Province|District> {};
      let temp1 = arr[0].split(' ');
      obj.parentCode = temp1[0];
      obj.parentName = temp1[1];
      let temp2 = arr[1].split(' ');
      obj.currentCode = temp2[0];
      obj.currentName = temp2[1];
      return obj;
    }
  }

}
