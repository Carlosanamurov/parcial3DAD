import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreosComponent } from './correos.component';

describe('CorreosComponent', () => {
  let component: CorreosComponent;
  let fixture: ComponentFixture<CorreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
