import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasboardPage } from './dasboard.page';

describe('DasboardPage', () => {
  let component: DasboardPage;
  let fixture: ComponentFixture<DasboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasboardPage],
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
