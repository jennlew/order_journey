import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineSearchNodeComponent } from './inline-search-node.component';

describe('InlineSearchNodeComponent', () => {
  let component: InlineSearchNodeComponent;
  let fixture: ComponentFixture<InlineSearchNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineSearchNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineSearchNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
