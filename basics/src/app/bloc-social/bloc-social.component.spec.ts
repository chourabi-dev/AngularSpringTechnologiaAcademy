import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocSocialComponent } from './bloc-social.component';

describe('BlocSocialComponent', () => {
  let component: BlocSocialComponent;
  let fixture: ComponentFixture<BlocSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
