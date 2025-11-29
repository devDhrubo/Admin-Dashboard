import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBar } from './setup-bar';

describe('SetupBar', () => {
  let component: SetupBar;
  let fixture: ComponentFixture<SetupBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
