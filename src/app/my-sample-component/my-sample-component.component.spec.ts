import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySampleComponentComponent } from './my-sample-component.component';

describe('MySampleComponentComponent', () => {
  let component: MySampleComponentComponent;
  let fixture: ComponentFixture<MySampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySampleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
