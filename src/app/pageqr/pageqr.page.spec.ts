import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageqrPage } from './pageqr.page';

describe('PageqrPage', () => {
  let component: PageqrPage;
  let fixture: ComponentFixture<PageqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
