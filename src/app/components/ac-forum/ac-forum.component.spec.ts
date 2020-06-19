import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACForumComponent } from './ac-forum.component';

describe('ACForumComponent', () => {
  let component: ACForumComponent;
  let fixture: ComponentFixture<ACForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
