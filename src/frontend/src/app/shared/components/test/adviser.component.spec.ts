import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserComponent } from '../adviser/adviser.component';

describe('AdviserComponent', () => {
  let component: AdviserComponent;
  let fixture: ComponentFixture<AdviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
