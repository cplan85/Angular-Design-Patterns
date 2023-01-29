import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBuilderComponent } from './person-builder.component';

describe('PersonBuilderComponent', () => {
  let component: PersonBuilderComponent;
  let fixture: ComponentFixture<PersonBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
