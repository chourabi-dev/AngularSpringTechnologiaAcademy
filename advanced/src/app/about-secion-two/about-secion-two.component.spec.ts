import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSecionTwoComponent } from './about-secion-two.component';

describe('AboutSecionTwoComponent', () => {
  let component: AboutSecionTwoComponent;
  let fixture: ComponentFixture<AboutSecionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSecionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSecionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
