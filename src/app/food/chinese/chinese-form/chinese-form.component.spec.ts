import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseFormComponent } from './chinese-form.component';

describe('ChineseFormComponent', () => {
  let component: ChineseFormComponent;
  let fixture: ComponentFixture<ChineseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
