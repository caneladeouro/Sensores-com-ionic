import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiroscopioPage } from './giroscopio.page';

describe('GiroscopioPage', () => {
  let component: GiroscopioPage;
  let fixture: ComponentFixture<GiroscopioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiroscopioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiroscopioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
