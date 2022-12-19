import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMessagesComponent } from './load-messages.component';

describe('LoadMessagesComponent', () => {
  let component: LoadMessagesComponent;
  let fixture: ComponentFixture<LoadMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
