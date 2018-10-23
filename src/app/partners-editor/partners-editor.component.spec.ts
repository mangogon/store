import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersEditorComponent } from './partners-editor.component';

describe('PartnersEditorComponent', () => {
  let component: PartnersEditorComponent;
  let fixture: ComponentFixture<PartnersEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
