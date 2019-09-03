import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTabsPage } from './record-tabs.page';

describe('RecordTabsPage', () => {
  let component: RecordTabsPage;
  let fixture: ComponentFixture<RecordTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
