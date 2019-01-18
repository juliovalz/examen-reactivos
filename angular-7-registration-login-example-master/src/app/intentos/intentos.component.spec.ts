import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentosComponent } from './intentos.component';

describe('IntentosComponent', () => {
  let component: IntentosComponent;
  let fixture: ComponentFixture<IntentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
