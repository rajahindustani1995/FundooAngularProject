import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelNoteComponent } from './label-note.component';

describe('LabelNoteComponent', () => {
  let component: LabelNoteComponent;
  let fixture: ComponentFixture<LabelNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
