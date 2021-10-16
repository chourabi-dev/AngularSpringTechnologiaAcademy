import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSecionOneComponent } from './about-secion-one.component';

describe('AboutSecionOneComponent', () => {
  let component: AboutSecionOneComponent;
  let fixture: ComponentFixture<AboutSecionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSecionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSecionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
