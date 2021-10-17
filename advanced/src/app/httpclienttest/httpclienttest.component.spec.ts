import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclienttestComponent } from './httpclienttest.component';

describe('HttpclienttestComponent', () => {
  let component: HttpclienttestComponent;
  let fixture: ComponentFixture<HttpclienttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpclienttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclienttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
