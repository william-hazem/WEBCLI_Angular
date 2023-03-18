import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldBindingComponent } from './hello-world-binding.component';

describe('HelloWorldBindingComponent', () => {
  let component: HelloWorldBindingComponent;
  let fixture: ComponentFixture<HelloWorldBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
