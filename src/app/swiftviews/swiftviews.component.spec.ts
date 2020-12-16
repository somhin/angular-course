import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftviewsComponent } from './swiftviews.component';

describe('SwiftviewsComponent', () => {
  let component: SwiftviewsComponent;
  let fixture: ComponentFixture<SwiftviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
