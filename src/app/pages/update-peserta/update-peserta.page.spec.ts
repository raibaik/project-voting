import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePesertaPage } from './update-peserta.page';

describe('UpdatePesertaPage', () => {
  let component: UpdatePesertaPage;
  let fixture: ComponentFixture<UpdatePesertaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatePesertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
