import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsListingComponent } from './sells-listing.component';

describe('SellsListingComponent', () => {
  let component: SellsListingComponent;
  let fixture: ComponentFixture<SellsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
