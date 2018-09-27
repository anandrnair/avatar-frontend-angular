import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldDialogComponent } from './add-field-dialog.component';

describe('AddFieldDialogComponent', () => {
  let component: AddFieldDialogComponent;
  let fixture: ComponentFixture<AddFieldDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
