import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VotingsPage } from './votings.page';

describe('VotingsPage', () => {
  let component: VotingsPage;
  let fixture: ComponentFixture<VotingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VotingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
