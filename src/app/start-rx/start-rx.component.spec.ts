import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRxComponent } from './start-rx.component';

describe('StartRxComponent', () => {
  let component: StartRxComponent;
  let fixture: ComponentFixture<StartRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartRxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
