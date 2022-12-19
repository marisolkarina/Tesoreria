import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadClientDataComponent } from './head-client-data.component';

describe('HeadClientDataComponent', () => {
  let component: HeadClientDataComponent;
  let fixture: ComponentFixture<HeadClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadClientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
