import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmComponent } from './logm.component';

describe('LogmComponent', () => {
  let component: LogmComponent;
  let fixture: ComponentFixture<LogmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
