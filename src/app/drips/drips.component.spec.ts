import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DripsComponent } from './drips.component';

describe('DripsComponent', () => {
  let component: DripsComponent;
  let fixture: ComponentFixture<DripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
