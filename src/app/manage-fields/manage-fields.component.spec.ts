import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFieldsComponent } from './manage-fields.component';

describe('ManageFieldsComponent', () => {
  let component: ManageFieldsComponent;
  let fixture: ComponentFixture<ManageFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
