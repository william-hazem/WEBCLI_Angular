import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldDiComponent } from './hello-world-di.component';

describe('HelloWorldDiComponent', () => {
  let component: HelloWorldDiComponent;
  let fixture: ComponentFixture<HelloWorldDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldDiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
