import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseHttpComponent } from './use-http.component';

describe('UseHttpComponent', () => {
  let component: UseHttpComponent;
  let fixture: ComponentFixture<UseHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
