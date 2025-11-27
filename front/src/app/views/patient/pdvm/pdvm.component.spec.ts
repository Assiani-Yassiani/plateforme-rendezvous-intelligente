import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvmComponent } from './pdvm.component';


describe('PdvmComponent', () => {
  let component: PdvmComponent;
  let fixture: ComponentFixture<PdvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdvmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
