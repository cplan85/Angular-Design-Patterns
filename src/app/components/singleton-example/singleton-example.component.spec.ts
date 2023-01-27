import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonExampleComponent } from './singleton-example.component';

describe('SingletonExampleComponent', () => {
  let component: SingletonExampleComponent;
  let fixture: ComponentFixture<SingletonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletonExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
