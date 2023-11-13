import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeprincipalPage } from './homeprincipal.page';

describe('HomeprincipalPage', () => {
  let component: HomeprincipalPage;
  let fixture: ComponentFixture<HomeprincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
