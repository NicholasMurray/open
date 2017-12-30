import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldPageComponent } from './formfield-page.component';

describe('FormfieldPageComponent', () => {
  let component: FormfieldPageComponent;
  let fixture: ComponentFixture<FormfieldPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfieldPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfieldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
