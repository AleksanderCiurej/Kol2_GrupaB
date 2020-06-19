import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACForumItemComponent } from './ac-forum-item.component';

describe('ACForumItemComponent', () => {
  let component: ACForumItemComponent;
  let fixture: ComponentFixture<ACForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
