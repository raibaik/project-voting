import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPage } from './user.page';

describe('UserPage', () => {
  let component: UserPage;
  let fixture: ComponentFixture<UserPage>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPage],
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

