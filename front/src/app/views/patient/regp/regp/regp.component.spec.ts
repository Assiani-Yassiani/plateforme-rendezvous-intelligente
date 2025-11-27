import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpComponent } from './regp.component';

describe('RegpComponent', () => {
  let component: RegpComponent;
  let fixture: ComponentFixture<RegpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
