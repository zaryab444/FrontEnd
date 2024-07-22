import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionsComponent } from './call-to-actions.component';

describe('CallToActionsComponent', () => {
  let component: CallToActionsComponent;
  let fixture: ComponentFixture<CallToActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
