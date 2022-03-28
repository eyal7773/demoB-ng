import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeComComponent } from './cake-com.component';

describe('CakeComComponent', () => {
  let component: CakeComComponent;
  let fixture: ComponentFixture<CakeComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
