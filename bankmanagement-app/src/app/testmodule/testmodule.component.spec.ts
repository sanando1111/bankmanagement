import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmoduleComponent } from './testmodule.component';

describe('TestmoduleComponent', () => {
  let component: TestmoduleComponent;
  let fixture: ComponentFixture<TestmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tittle should be ->This is a test component', () => {
    //component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('This is a test component');
    //console.log(component.title);
  });
});
