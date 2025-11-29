import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavButton } from './header-nav-button';

describe('HeaderNavButton', () => {
  let component: HeaderNavButton;
  let fixture: ComponentFixture<HeaderNavButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
