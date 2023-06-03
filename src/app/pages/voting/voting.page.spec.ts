import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VotingPage } from './voting.page';

describe('VotingPage', () => {
  let component: VotingPage;
  let fixture: ComponentFixture<VotingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}
);