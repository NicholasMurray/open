import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';
import { CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent } from '../../containers/card';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponent, CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
