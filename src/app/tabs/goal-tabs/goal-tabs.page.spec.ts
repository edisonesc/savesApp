import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalTabsPage } from './goal-tabs.page';

describe('GoalTabsPage', () => {
  let component: GoalTabsPage;
  let fixture: ComponentFixture<GoalTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
