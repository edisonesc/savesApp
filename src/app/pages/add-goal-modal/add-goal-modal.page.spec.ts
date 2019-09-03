import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoalModalPage } from './add-goal-modal.page';

describe('AddGoalModalPage', () => {
  let component: AddGoalModalPage;
  let fixture: ComponentFixture<AddGoalModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGoalModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoalModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
