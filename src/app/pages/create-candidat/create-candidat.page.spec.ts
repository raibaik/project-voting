import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCandidatPage } from './create-candidat.page';

describe('CreateCandidatPage', () => {
  let component: CreateCandidatPage;
  let fixture: ComponentFixture<CreateCandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateCandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
