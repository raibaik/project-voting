import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPesertaPage } from './add-peserta.page';

describe('AddPesertaPage', () => {
  let component: AddPesertaPage;
  let fixture: ComponentFixture<AddPesertaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPesertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
