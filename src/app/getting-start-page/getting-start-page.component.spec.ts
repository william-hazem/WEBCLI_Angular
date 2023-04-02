import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartPageComponent } from './getting-start-page.component';

describe('GettingStartPageComponent', () => {
  let component: GettingStartPageComponent;
  let fixture: ComponentFixture<GettingStartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingStartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettingStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
