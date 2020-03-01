import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksApplicationComponent } from './tasks-application.component';

describe('TasksApplicationComponent', () => {
  let component: TasksApplicationComponent;
  let fixture: ComponentFixture<TasksApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
