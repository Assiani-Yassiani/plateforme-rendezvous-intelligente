import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvmComponent } from './rdvm.component';

describe('RdvmComponent', () => {
  let component: RdvmComponent;
  let fixture: ComponentFixture<RdvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
