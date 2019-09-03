import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTabsPage } from './chart-tabs.page';

describe('ChartTabsPage', () => {
  let component: ChartTabsPage;
  let fixture: ComponentFixture<ChartTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
