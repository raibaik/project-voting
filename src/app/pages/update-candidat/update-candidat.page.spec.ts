import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCandidatPage } from './update-candidat.page';

describe('UpdateCandidatPage', () => {
  let component: UpdateCandidatPage;
  let fixture: ComponentFixture<UpdateCandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateCandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
