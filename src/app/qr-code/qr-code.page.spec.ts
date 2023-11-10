import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { QRCodePage } from './qr-code.page';

describe('QRCodePage', () => {
  let component: QRCodePage;
  let fixture: ComponentFixture<QRCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QRCodePage],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(QRCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
