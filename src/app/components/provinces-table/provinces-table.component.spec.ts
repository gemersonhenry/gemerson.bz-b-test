import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincesTableComponent } from './provinces-table.component';

describe('ProvincesTableComponent', () => {
  let component: ProvincesTableComponent;
  let fixture: ComponentFixture<ProvincesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
