import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesPage } from './pages.page';

describe('PagesPage', () => {
  let component: PagesPage;
  let fixture: ComponentFixture<PagesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesPage],
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
