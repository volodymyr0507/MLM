import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlmComponent } from './mlm.component';

describe('MlmComponent', () => {
  let component: MlmComponent;
  let fixture: ComponentFixture<MlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
