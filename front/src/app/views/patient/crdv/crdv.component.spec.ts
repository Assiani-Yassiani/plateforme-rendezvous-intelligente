import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdvComponent } from './crdv.component';

describe('CrdvComponent', () => {
  let component: CrdvComponent;
  let fixture: ComponentFixture<CrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
