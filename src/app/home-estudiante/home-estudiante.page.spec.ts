import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeEstudiantePage } from './home-estudiante.page'; // Cambiado de 'HomePage' a 'HomeEstudiantePage'

describe('HomeEstudiantePage', () => { // Cambiado de 'HomePage' a 'HomeEstudiantePage'
  let component: HomeEstudiantePage; // Cambiado de 'HomePage' a 'HomeEstudiantePage'
  let fixture: ComponentFixture<HomeEstudiantePage>; // Cambiado de 'HomePage' a 'HomeEstudiantePage'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeEstudiantePage], // Cambiado de 'HomePage' a 'HomeEstudiantePage'
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEstudiantePage); // Cambiado de 'HomePage' a 'HomeEstudiantePage'
    component = fixture.componentInstance; // Cambiado de 'HomePage' a 'HomeEstudiantePage'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
