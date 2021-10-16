import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithUserComponent } from './chat-with-user.component';

describe('ChatWithUserComponent', () => {
  let component: ChatWithUserComponent;
  let fixture: ComponentFixture<ChatWithUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWithUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWithUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
