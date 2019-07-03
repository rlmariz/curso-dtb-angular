import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaItensComponent } from './nota-itens.component';

describe('NotaItensComponent', () => {
  let component: NotaItensComponent;
  let fixture: ComponentFixture<NotaItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
