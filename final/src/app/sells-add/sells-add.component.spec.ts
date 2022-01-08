import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsAddComponent } from './sells-add.component';

describe('SellsAddComponent', () => {
  let component: SellsAddComponent;
  let fixture: ComponentFixture<SellsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
