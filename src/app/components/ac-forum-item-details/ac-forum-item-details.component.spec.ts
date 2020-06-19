import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACForumItemDetailsComponent } from './ac-forum-item-details.component';

describe('ACForumItemDetailsComponent', () => {
  let component: ACForumItemDetailsComponent;
  let fixture: ComponentFixture<ACForumItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACForumItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACForumItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
