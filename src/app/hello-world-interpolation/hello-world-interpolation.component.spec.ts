import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarMessageComponent } from './hello-world-interpolation.component';

describe('VarMessageComponent', () => {
  let component: VarMessageComponent;
  let fixture: ComponentFixture<VarMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
