import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaNovaComponent } from './nota-nova.component';

describe('NotaNovaComponent', () => {
  let component: NotaNovaComponent;
  let fixture: ComponentFixture<NotaNovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaNovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
