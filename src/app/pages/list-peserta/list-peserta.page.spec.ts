import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPesertaPage } from './list-peserta.page';

describe('ListPesertaPage', () => {
  let component: ListPesertaPage;
  let fixture: ComponentFixture<ListPesertaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListPesertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
